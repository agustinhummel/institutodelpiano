const express = require('express')
const { editUser } = require('../controllers/User/userEdit')
const {getAllUser} = require('../controllers/User/getAllUsers')
const {getOneUser} = require('../controllers/User/getOneUser')
const {userDelete} = require('../controllers/User/userDelete')
const { createUser } = require('../controllers/User/userCreate')


const router = express.Router()

router.put('/',editUser)
router.get('/',getAllUser)
router.post('/',createUser)
router.delete('/:userId',userDelete)
router.get('/:userId',getOneUser)


module.exports = router