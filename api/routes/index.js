const express = require('express')
const userRoutes = require('./userRoutes')
const authRoutes = require('./authRoutes')
const emailRoutes = require('./emailRoutes')
const router = express.Router()

router.use('/users',userRoutes)
router.use('/auth',authRoutes)
router.use('/email', emailRoutes)

module.exports = router