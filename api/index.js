const express = require('express')
const path = require('path')
const logger = require('morgan')
const cors = require('cors')
require('dotenv').config()

const indexRouter = require('./routes/index')

const port = process.env.PORT || 3000

const app = express()
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)

 //catch 404 and forward to error handler
app.use((req, res) => {
  return res.status(404).send({error: "Please, Check your route"})
})

// Error catching endware.
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  console.log(err)
  console.log(err.message)
  const message =  err.message;
  return res.status(status).send({error:message});
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Servidor corriendo en http://localhost:${port}`)
})

module.exports = app