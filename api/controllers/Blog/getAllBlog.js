const { Blog, User } = require('../../database/models');

module.exports = {
    getAllBlog: async (req, res, next) => {
        
     
        try {
            const allBlog = await Blog.findAll()


        return res.status(200).json(allBlog)
 
        } catch (error) {
            return res.status(500).json(`[Error get all Blog] - [allBlog - GET]: ${error.message}`)
          }
    },
};