const express = require('express')
const mysql = require('mysql2/promise')
const { mysqlConfig } = require('../../config')
const router = express.Router()

// Get all services
router.get('/', async (req, res) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig)
    const [data] = await connection.execute(`
        SELECT * FROM services
        `)

    return res.status(200).send(data)
  } catch (err) {
    return res.status(500).send({ err: 'Server issue. Try again later.' })
  }
})

// Add a new service
router.post('/add', async (req, res) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig)
    const [data] = await connection.execute`
        INSERT INTO services (title, description, price)
        VALUES (${mysql.escape(req.body.title)},${mysql.escape(
      req.body.description
    )}, ${mysql.escape(req.body.price)})
    `

    if (!data.insertId || data.affectedRows === 0) {
      return res.status(500).send({ err: 'Server issue. Try again later.' })
    }

    return res.status(200).send({ msg: 'Successfully added a service.' })
  } catch (err) {
    return res.status(500).send({ err: 'Server issue. Try again later.' })
  }
})

module.exports = router
