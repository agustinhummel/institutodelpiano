const express = require('express')
const { createEvent } = require('../controllers/Event/createEvent')
const { deleteEvent } = require('../controllers/Event/deleteEvent')
const { editEvent } = require('../controllers/Event/editEvent')
const { getAllEvent } = require('../controllers/Event/getAllEvent')
const { getOneEvent } = require('../controllers/Event/getOneEvent')

const router = express.Router()

router.post('/',createEvent)
router.get('/',getAllEvent)
router.get('/:eventId',getOneEvent)
router.delete('/:eventId',deleteEvent)
router.put('/:eventId',editEvent)


module.exports = router