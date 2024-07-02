// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
app.use(express.json());

app.post('/forgot-password', (req, res) => {
  const { email } = req.body;

  // Dummy implementation for example purposes
  const resetToken = Math.random().toString(36).substr(2); // Generate a random reset token
  const resetUrl = `https://your-app.com/reset-password?token=${resetToken}`;

  // Set up the email transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password',
    },
  });

  const mailOptions = {
    from: 'no-reply@your-app.com',
    to: email,
    subject: 'Password Reset',
    text: `Click the following link to reset your password: ${resetUrl}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: 'Error sending email' });
    }
    res.status(200).json({ message: 'Reset email sent successfully' });
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
