const config = {
  nameCharacterMin: 2,
  nameCharacterMax: 30,
  emailCharacterMax: 40,
  emailFormat: /^[a-zA-Z0-9_.-]+@([a-zA-Z0-9-]+.)+[a-zA-Z]{2,4}$/,
  subjectCharacterMin: 2,
  subjectCharacterMax: 40,
  phoneCharacterMin: 7,
  phoneCharacterMax: 15,
  messageCharacterMin: 2,
  messageCharacterMax: 500,
  messageFormat: /^[a-zA-Z0-9,.\s?]*$/,
};

module.exports = config;
