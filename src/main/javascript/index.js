const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html')
    // [RuleTest: Reflected Cross Site Scripting.]
    res.send('Hello ' + req.query.name)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
