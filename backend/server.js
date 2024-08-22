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

    // Email options with styled HTML
    const mailOptions = {
        from: "clear.tech11@gmail.com",
        to: "clear.tech11@gmail.com", // Replace with your email
        subject: 'New Contact Form Submission',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
                <h3 style="color: #4CAF50; text-align: center;">New Contact Form Submission</h3>
                <p style="color: #333; font-size: 1.1em;">You have received a new contact form submission. Here are the details:</p>
                <div style="background-color: #fff; padding: 15px; border-radius: 8px; border: 1px solid #ddd; margin: 20px 0;">
                    <p style="color: #333; font-size: 1.1em;"><strong>First Name:</strong> ${first_name}</p>
                    <p style="color: #333; font-size: 1.1em;"><strong>Last Name:</strong> ${last_name}</p>
                    <p style="color: #333; font-size: 1.1em;"><strong>Email:</strong> ${email}</p>
                    <p style="color: #333; font-size: 1.1em;"><strong>Phone Number:</strong> ${phone_number}</p>
                    <p style="color: #333; font-size: 1.1em;"><strong>Message:</strong> ${message}</p>
                </div>
            </div>
        `
    };

    const sentmailOptions={
        from: "clear.tech11@gmail.com",
        to: email, // Replace with your email
        subject: 'New Contact Form Submission',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
                <h3 style="color: #4CAF50; text-align: center;">Message sent</h3>
                <p style="color: #333; font-size: 1.1em;">Your message has been sent succesfully! </p>
                <p style="color: #333; font-size: 1.1em;">We will contact you very soon! </p>
            </div>
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

    transporter.sendMail(sentmailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ message: 'Failed to send email' });
        }
        console.log('Email sent:', info.response);
    });

    // Clear form fields
    req.body = {};
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
