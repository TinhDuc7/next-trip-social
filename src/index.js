require('dotenv').config()

const express = require('express');
const app = express();
const port = process.env.PORT;
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./config/db')
const router = require('./routes/index');

db.connect();

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({limit:'10mb', extended: true}))

app.use(cors());

app.use('/api/v1', router);


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
}) 