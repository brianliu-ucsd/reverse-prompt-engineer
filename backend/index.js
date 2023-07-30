const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

app.use(bodyParser.json({ limit: '30 mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30 mb', extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get('/', function (_, res) {
    res.send('Hello World');
})

var server = app.listen(PORT, '127.0.0.1', function () {
    var port = server.address().port;
    
    console.log('Example app listening at http://localhost:%s', port);
});
