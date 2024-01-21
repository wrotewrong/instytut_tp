require('dotenv').config();
const config = require('../serverConfig');

exports.getEnv = async (req, res) => {
  try {
    res.send(process.env.SITE_KEY);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
