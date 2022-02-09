const express = require('express');
const mysql = require('mysql');
const parser = require('./monitor');

require('dotenv').config();

const app = express();

parser('https://reddit.com/r/pennystocks/.rss')

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
    console.log('Example app listening on port ' + process.env.PORT);
});