require('dotenv').config();
const nodemailer = require('nodemailer');

exports.getMail = async (req, res) => {
  try {
    res.json({ message: 'get works' });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.postMail = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_LOGIN,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.MAIL_LOGIN,
      to: process.env.MAIL_LOGIN,
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
      } else {
        console.log('Email sent:', info.response);
        res.status(200).send('Email sent successfully');
      }
    });

    res.json({
      message: `post works - ${[name, email, subject, message]} - ok`,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
