const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();


// app.get('/', (req, res) => {
//     res.send('Hi there');
// })
// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use('/api/', require('./routes/hello'));

app.get('/test', (req, res) => {
    res.send('test!');
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
})