const express = require('express');
const path = require('path');
const cors = require("cors");
const bodyParser = require('body-parser');
// const http = require("http");
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors({origin : '*'}));
// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, './client/build')));

app.use('/api/', require('./routes/hello'));

app.get('/test', (req, res) => {
    res.send('test!');
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
        console.log('error reaching site');
});



// var httpServer = http.createServer(app);

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
})