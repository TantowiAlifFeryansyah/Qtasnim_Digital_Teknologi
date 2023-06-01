const express = require('express')
const app = express()
const port = 3000

const cors = require('cors')

const router = require('./routes')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (_req, res) => {
  res.send('API berhasil jalan')
})

app.use('/', router)

app.listen(port, () => {
  console.log(`Jalan ${port}`)
})