const express = require('express')
const userRoutes = require('./userRoutes')
const authRoutes = require('./authRoutes')
const emailRoutes = require('./emailRoutes')
const serviceRoutes = require('./serviceRoutes')
const professionalRoutes = require('./professionalRoutes')
const router = express.Router()

router.use('/user',userRoutes)
router.use('/service',serviceRoutes)
router.use('/professional',professionalRoutes)
router.use('/auth',authRoutes)
router.use('/email', emailRoutes)

module.exports = router