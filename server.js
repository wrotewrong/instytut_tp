const express = require('express');
const path = require('path');
require('dotenv').config();
const cors = require('cors');

const envRouter = require('./routes/env.routes');
const mailRouter = require('./routes/mail.routes');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extends: false }));
app.use(express.json());

app.use(envRouter);
app.use(mailRouter);

app.use((req, res) => {
  res.status(404).send('Not found...');
});

app.listen(process.env.PORT || 8000, () => {
  console.log('server is running...');
});
