require('ts-node/register');
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  username: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB,
  host: process.env.HOST,
  dialect: process.env.DIALECT,
};