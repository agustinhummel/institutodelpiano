const express = require('express')
const { createObraSocial } = require('../controllers/ObraSocial/createObraSocial')
const { deleteObraSocial } = require('../controllers/ObraSocial/deleteObraSocial')
const { editObraSocial } = require('../controllers/ObraSocial/editObraSocial')
const { getAllObraSocial } = require('../controllers/ObraSocial/getAllObraSocial')
const { getOneObraSocial } = require('../controllers/ObraSocial/getOneObraSocial')

const router = express.Router()

router.post('/',createObraSocial)
router.get('/',getAllObraSocial)
router.get('/:obraSocialId',getOneObraSocial)
router.delete('/:obraSocialId',deleteObraSocial)
router.put('/:obraSocialId',editObraSocial)


module.exports = router