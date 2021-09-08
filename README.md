# maven-scala-sample
Simple example showing how [Fortify SCA](https://www.microfocus.com/en-us/cyberres/application-security/static-code-analyzer)
scanning can be performed in Scala applications built with Maven using the 
[scala-maven-plugin](https://github.com/davidB/scala-maven-plugin).

### Requirements

To run this sample, you'll need a Fortify SCA installation and license, as well as a license file for
the Scala Fortify plugin. If you're a Fortify customer but not yet in the possession of this license file,
please contact Fortify support to obtain one free of charge.

### Usage

`mvn clean compile` will perform a compilation of the sources. During the compilation, Lightbend's
[scala-fortify plugin](https://developer.lightbend.com/docs/fortify/current/) will be active in the
Scala compiler. As a result, translation of the Scala code to Fortify NST will take place. With the
current settings, the NSTs will be stored under a build id identical to the project's Maven final
name, in this case `maven-scala-sample-1.0`.

After translation, regular `sourceanalyzer` commands can be used to perform the scan phase, e.g.

```
$ sourceanalyzer -b maven-scala-sample-1.0 -verbose -scan

Fortify Static Code Analyzer 21.1.0.0162 (using JRE 11.0.10)
Modules:
SCA Platform 21.1.0.0100
C/C++ Translator (CTran) 21.1.0.0161
Go Translator 21.1.0.0061
Analyzing 1 source file(s)
Rendering 2 results (-)   96% [=================== ]  
                                                     
[/home/fransvb/Projects/public/maven-scala-sample/src/main/scala/com/example]

[75113D74D4FD9A5AD5F77D94B4E63B0E : critical : Privacy Violation : dataflow ]
App.scala(9) :  ->Predef.println(0)
    App.scala(8) : <=> (b)
        App.scala(7) : return
    App.scala(8) : <->com.example.App$$anonfun$main$1.apply(0->return)
    App.scala(6) : <=> (a)
    App.scala(6) : <- Console.readPassword(return)

[DE9585CE5B2B7B7937D4C4C1B2BFE28E : low : J2EE Bad Practices : Leftover Debug Code : structural ]
    App.scala(5)
Analysis completed in 00:06
```
