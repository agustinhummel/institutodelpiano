const express = require('express')
const { createService } = require('../controllers/Service/createService')
const { deleteService } = require('../controllers/Service/deleteService')
const { editService } = require('../controllers/Service/editService')
const {getAllService} = require('../controllers/Service/getAllService')
const {getOneService} = require('../controllers/Service/getOneService')


const router = express.Router()

router.post('/',createService)
router.put('/',editService)
router.get('/',getAllService)
router.get('/:serviceId',getOneService)
router.delete('/:serviceId',deleteService)


module.exports = router