
const { Post} = require('../../database/models');

module.exports = {
    getOnePost: async (req, res, next) => {
        try {
            const {postId} = req.params
            if (!postId) {
                throw new Error("Missing Parameters")
            }
              const postFound = await Post.findByPk(postId)

            return res.status(200).json(postFound)
        } catch (error) {
            return res.status(500).json(
                `[Error get One Post] - [getOnePost - GET]: ${error.message}`,
            )
        }
    },
};