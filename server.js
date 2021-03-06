const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3001
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// routes
require(path.join(__dirname, './routes/api.js'))(app)

if (process.env.NODE_ENV === 'production') app.use(express.static('client/build'))

app.get('*', (req, res) => {
  if (process.env.NODE_ENV === 'production') res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(PORT, () => {
  console.log(`API server on PORT ${PORT}`)
})
