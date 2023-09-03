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
    res.json({
      message: `post works - ${[name, email, subject, message]} - ok`,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
