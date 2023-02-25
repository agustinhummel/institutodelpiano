const express = require('express')
const { createPost } = require('../controllers/Post/createPost')
const { deletePost } = require('../controllers/Post/deletePost')
const { editPost } = require('../controllers/Post/editPost')
const { getAllPost } = require('../controllers/Post/getAllPost')
const { getOnePost } = require('../controllers/Post/getOnePost')


const router = express.Router()

router.post('/',createPost)
router.get('/',getAllPost)
router.get('/:postId',getOnePost)
router.delete('/:postId',deletePost)
router.put('/:postId',editPost)


module.exports = router