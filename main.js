const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes')

const app = express()
const PORT = 8100 || process.env.PORT

app.use(routes())

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

server.on('close', () => {
  mongoose.connection.close()
})
