require('dotenv').config()
const express = require('express')
const path = require('path')
const PORT = process.env.port || 3001
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require(path.join(__dirname, './routes/user.js'))(app)

app.listen(PORT, () => {
  console.log(`API server on PORT ${PORT}`)
})
