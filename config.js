require('dotenv').config()

const DB_CONNECTION_ON_CLOUD = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@vku.ubovshq.mongodb.net/cita?retryWrites=true&w=majority`

module.exports = {
  DB_CONNECTION_ON_CLOUD,
}
