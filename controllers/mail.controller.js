exports.getMail = async (req, res) => {
  try {
    res.json({ message: 'get works' });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.postMail = async (req, res) => {
  try {
    res.json({ message: 'post works' });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
