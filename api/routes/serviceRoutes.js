const express = require('express')
const { createService } = require('../controllers/Service/createService')
const { deleteService } = require('../controllers/Service/deleteService')
const {getAllService} = require('../controllers/Service/getAllService')
const {getOneService} = require('../controllers/Service/getOneService')


const router = express.Router()

router.post('/',createService)
router.get('/',getAllService)
router.get('/:serviceId',getOneService)
router.delete('/:serviceId',deleteService)


module.exports = router