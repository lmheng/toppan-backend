require("dotenv").config();

module.exports = {
  HOST: process.env.DB_HOST || "localhost",
  USER: process.env.DB_DIALECT || "postgres",
  PASSWORD: process.env.DB_PASSWORD || "password",
  DB: process.env.DB_SCHEMA || "librarysql",
  dialect: process.env.DB_DIALECT || "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
