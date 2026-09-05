require('dotenv').config();

const express = require('express');
const connectDb = require('./config.js')
const route = require('./routes/student.route.js')

const app = express()
app.use(express.json())

app.use('/api', route)

const port = 3000

connectDb()



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})