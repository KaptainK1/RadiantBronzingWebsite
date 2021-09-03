const express = require('express');
require('dotenv').config();
const app = express();


// app.get('/', (req, res) => {
//     res.send('Hi there');
// })

app.use('/api/', require('./routes/hello'));

app.get('/test', (req, res) => {
    res.send('test!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
})