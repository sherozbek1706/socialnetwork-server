require("dotenv/config");

const config = {
  PORT: process.env.PORT,
  DB: {
    DB_NAME: process.env.DB_NAME,
    DB_HOST: process.env.DB_HOST,
  },
  JWT: {
    SECRET: process.env.JWT_SECRET,
  },
};

module.exports = config;
