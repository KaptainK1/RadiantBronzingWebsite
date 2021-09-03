const dotenv = require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const {getLogger} = require("nodemailer/lib/shared");
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/test', (req, res) => {
    res.send({express: 'Thanks!'});
    }
)

app.get('/testEmail', (req,res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
            clientId: process.env.OAUTH_CLIENTID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN
        }
    });

    const mailOptions = {
        from: 'jkioicefire@gmail.com',
        to: 'jkioicefire@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent');
        }
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});