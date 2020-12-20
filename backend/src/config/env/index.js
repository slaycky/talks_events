const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../../../.env') });

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  storage: process.env.STORAGE,
  version: 'v1',
  corsOptions: {
    origin: '*',
    methods: 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  },
  database: {
    name: process.env.NODE_ENV !== 'test' ? process.env.DB_NAME : `${process.env.DB_NAME}-test`,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
};
