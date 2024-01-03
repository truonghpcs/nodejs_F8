const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('hello world')
})
var a = 1;
var b = 2;
var c = a + b;

app.get('/khen', (req, res) => {
    res.send('Truong DZvcl!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})