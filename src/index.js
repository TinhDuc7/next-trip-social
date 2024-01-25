require('dotenv').config()

const express = require('express');
const app = express();
const port = process.env.PORT;

const db = require('./config/db')

db.connect();

// app.get('/', (req, res) => {
//     res.send('Hello World!')
//     res.send('Check merge')
//     res.send('Test git')
// })


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})