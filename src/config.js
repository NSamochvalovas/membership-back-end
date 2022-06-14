require('dotenv').config()

module.exports = {
  mysqlConfig: {
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    port: process.env.MYSQL_PORT
  },
  serverPort: process.env.SERVER_PORT
}
