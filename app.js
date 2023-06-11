const express = require('express')
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    allowedHeaders: 'Content-Type,Authorization',

};

app.use(cors(corsOptions));
app.use(express.json());

    app.post('/send-email', async (req,res)=> {
        const {name,email,message} = req.body

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'jakubka24@gmail.com',
                    pass: 'revomshxyuiiqpfr'
                }
            });

        const mailOptions = {
            from: name,
            to: 'jakubka24@gmail.com',
            subject: email,
            text: message,
        };


        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                res.status(500).send('Error sending email.');
            } else {
                console.log('Email sent: ' + info.response);
                res.send('Email sent successfully!!!');
            }
        });
        });



app.listen(3005,'localhost',() => {
    console.log('listening on localhost:3005')
})