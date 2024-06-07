require("dotenv").config();

const config = {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.HOST,
    dialect: "postgres",
    port: process.env.PG_PORT,
  },
  test: {
    username: "postgres",
    password: "admin123",
    database: "tstmidware",
    host: "localhost",
    dialect: "postgres",
  },
};

module.exports = config;
