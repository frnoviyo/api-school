module.exports = {
  PORT: process.env.PORT,
  DB: {
    username: "postgres",
    password: "mysecretpassword",
    database: "school_qa",
    host: "localhost",
    dialect: "postgres",
  },
};
