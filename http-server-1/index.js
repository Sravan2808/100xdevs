const express = require('express')
const app = express()
const port = 3000

//fs.readFile("path","utf-8",())


app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.listen(port)
// create a simple http serve in c from scratch
// create a todo application where u store data in a file
// create a jaba/rust/golang http server