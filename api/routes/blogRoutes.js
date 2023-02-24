const express = require('express')
const { createBlog } = require('../controllers/Blog/createBlog')
const { deleteBlog } = require('../controllers/Blog/deleteBlog')
const {getAllBlog} = require('../controllers/Blog/getAllBlog')
const {getOneBlog} = require('../controllers/Blog/getOneBlog')
const {editBlog} = require('../controllers/Blog/editBlog')

const router = express.Router()

router.post('/',createBlog)
router.get('/',getAllBlog)
router.get('/:blogId',getOneBlog)
router.delete('/:blogId',deleteBlog)
router.put('/:blogId',editBlog)


module.exports = router