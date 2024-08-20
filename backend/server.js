// server.js

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
  };
  app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use other services like 'SendGrid', 'Mailgun', etc.
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// POST endpoint for sending the email
app.post('/send-email', (req, res) => {
    const { first_name, last_name, email, phone_number, message } = req.body;

    // Email options
    const mailOptions = {
        from: "clear.tech11@gmail.com",
        to: "clear.tech11@gmail.com", // Replace with your email
        subject: 'New Contact Form Submission',
        text: `
            First Name: ${first_name}\n
            Last Name: ${last_name}\n
            Email: ${email}\n
            Phone: ${phone_number}\n
            Message: ${message}
        `
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ message: 'Failed to send email' });
        }
        console.log('Email sent:', info.response);
        res.status(200).json({ message: 'Email sent successfully' });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
