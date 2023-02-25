const { Post } = require('../../database/models');

module.exports = {
    deletePost: async (req, res, next) => {
        const { postId } = req.params;
        try{
            if (!postId) throw new Error("Missing parameters");
            const postFound= await Post.findByPk(postId)
            if (!postFound) throw new Error("Post not found");
            await postFound.destroy()
            
                return res.status(200).json("Post deleted")

        } catch (error) {
           return res.status(500).json( `[Error delete Post] - [deletePost - DELETE]: ${error.message}`)
               
           
        }
    },
};