
const { Blog, User} = require('../../database/models');

module.exports = {
    getOneBlog: async (req, res, next) => {
        try {
            const {blogId} = req.params
            if (!blogId) {
                throw new Error("Missing Parameters")
            }
              const blogFound = await Blog.findByPk(blogId)

            return res.status(200).json(blogFound)
        } catch (error) {
            return res.status(500).json(
                `[Error get One Blog] - [getOneBlog - GET]: ${error.message}`,
            )
        }
    },
};