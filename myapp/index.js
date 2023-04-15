const express = require('express');
const { send } = require('express/lib/response');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('First time with Express js')
})

app.get('/data', (req, res) => {
    res.send('Second time with Express Js')
})

app.listen(port, () => {
    console.log(`My first interaction with Express Js from ${port}`);
})