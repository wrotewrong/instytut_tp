require('dotenv').config();
const nodemailer = require('nodemailer');

exports.postMail = async (req, res) => {
  try {
    const { name, email, subject, tel, message } = req.body;
    const mailFormat = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const messageFormat = /^[a-zA-Z0-9,.?]*$/;

    if (
      name &&
      email &&
      subject &&
      tel &&
      message &&
      name.length >= 2 &&
      name.length <= 30 &&
      mailFormat.test(email) &&
      email.length <= 40 &&
      subject.length >= 2 &&
      subject.length <= 40 &&
      tel.length >= 7 &&
      tel.length <= 15 &&
      message.length >= 2 &&
      message.length <= 500 &&
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
