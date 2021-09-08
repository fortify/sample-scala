package com.example

object App {
  
  def main(args : Array[String]): Unit = {
    val a = System.console().readPassword()
    val f = (x: Any) => x
    val b = f(a)
    println(b)
  }

}
