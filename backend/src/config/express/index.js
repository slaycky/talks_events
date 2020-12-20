const express = require('express');
const helmet = require('helmet');
const xss = require('xss-clean');
const cors = require('cors');
require('dotenv').config();

const database = require('../database/mongodb');
const routes = require('../../routes');

const { errorTracker, errorHandler } = require('../../middlewares');
const { ApplicationError } = require('../../utils');

const { port, version, corsOptions } = require('../env');

const app = express();
database.connect();

app.set('port', port || 3000);
app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(xss());

Object.keys(routes).forEach((key) => app.use(`/api/${version}/${key}`, routes[key]));
Object.keys(routes).forEach((key) => console.log(`/api/${version}/${key}`));

app.use((req, res, next) => {
  next(new ApplicationError(404, 'Resource Not Found Try Again'));
});

app.use(errorTracker);
app.use(errorHandler);

const unexpectedErrorCatcher = (error) => {
  console.error(error);
  process.exit(1);
};

process.on('unhandledRejection', unexpectedErrorCatcher);
process.on('uncaughtException', unexpectedErrorCatcher);

module.exports = app;
