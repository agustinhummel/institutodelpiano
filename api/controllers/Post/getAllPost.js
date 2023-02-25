const { Post } = require('../../database/models');

module.exports = {
    getAllPost: async (req, res, next) => {
        
     
        try {
            const allPost = await Post.findAll()


        return res.status(200).json(allPost)
 
        } catch (error) {
            return res.status(500).json(`[Error get all Post] - [allPost - GET]: ${error.message}`)
          }
    },
};