const express = require('express')
const {createEmail} = require('../controllers/Email/createEmail')
const {deleteEmail} = require('../controllers/Email/deleteEmail')
const { sendEmail } = require('../controllers/Email/emailSend')
const router = express.Router()

router.post('/all', sendEmail)
router.post('/', createEmail)
router.get('/', deleteEmail)
router.delete('/:emailId', deleteEmail)

module.exports = router