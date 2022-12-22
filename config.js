require('dotenv').config()

const DB_CONNECTION_ON_CLOUD = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@databases.n6njyvb.mongodb.net/cita?retryWrites=true&w=majority`

module.exports = {
  DB_CONNECTION_ON_CLOUD,
}
