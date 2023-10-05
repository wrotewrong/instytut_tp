require('dotenv').config();
const nodemailer = require('nodemailer');
const config = require('../serverConfig');

exports.postMail = async (req, res) => {
  try {
    const { name, email, subject, tel, message } = req.body;
    const mailFormat = config.emailFormat;
    const messageFormat = config.messageFormat;

    if (
      name &&
      email &&
      subject &&
      tel &&
      message &&
      name.length >= config.nameCharacterMin &&
      name.length <= config.nameCharacterMax &&
      mailFormat.test(email) &&
      email.length <= config.emailCharacterMax &&
      subject.length >= config.subjectCharacterMin &&
      subject.length <= config.subjectCharacterMax &&
      tel.length >= config.phoneCharacterMin &&
      tel.length <= config.phoneCharacterMax &&
      message.length >= config.messageCharacterMin &&
      message.length <= config.messageCharacterMax &&
      messageFormat.test(message)
    ) {
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
        text: `Name: ${name}\nPhone: ${tel}\nEmail: ${email}\nMessage: ${message}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
          res.status(500).json({ message: 'Error sending email' });
        } else {
          console.log('Email sent:', req.body, info.response);
          res.status(200).json({ message: 'Email sent successfully' });
        }
      });
    } else {
      console.log('Bad request:', req.body);
      res.status(404).json({ message: 'Bad request' });
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
