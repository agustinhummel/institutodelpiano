const express = require('express')
const { createOpening } = require('../controllers/Opening/createOpening')
const { deleteOpening } = require('../controllers/Opening/deleteOpening')
const { editOpening } = require('../controllers/Opening/editOpening')
const { getAllOpening } = require('../controllers/Opening/getAllOpening')
const { getOneOpening } = require('../controllers/Opening/getOneOpening')


const router = express.Router()

router.post('/',createOpening)
router.get('/',getAllOpening)
router.get('/:openingId',getOneOpening)
router.delete('/:openingId',deleteOpening)
router.put('/:openingId',editOpening)


module.exports = router