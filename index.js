const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Aloha, Mundão')
})

app.listen(3000)
