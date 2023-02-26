const { Post } = require('../../database/models');


module.exports = {
    editPost: async (req, res, next) => {


        try {
            const {postId} = req.params 
            const {  title, description, image, author } = req.body;
            if (!title || !description || !image || !author) {
                throw new Error('missing parameters')
            }
            const postFound = await Post.findByPk(postId);

            if (!postFound) throw new Error("Post not found");
            const response = await postFound.update({ title, description, image, author });
            await postFound.save();
            return res.status(200).json(response)

        }
        catch (error) {
            return res.status(500).json(
                `[Error Edit Post] - [EditPost - PUT]: ${error.message}`,
            )
        }
    }

}