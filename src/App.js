const express = require('express')
const cors = require('cors')
const { serverPort } = require('./config')
const servicesRoutes = require('./routes/v1/services.js')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  return res.send('Server is running')
})

app.use('/v1/services', servicesRoutes)

app.all('*', (req, res) => {
  return res.status(404).send('Page not found...')
})

app.listen(serverPort, () => console.log(`Server is running ${serverPort}`))
