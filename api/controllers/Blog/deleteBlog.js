const { Blog } = require('../../database/models');

module.exports = {
    deleteBlog: async (req, res, next) => {
        const { blogId } = req.params;
        try{
            if (!blogId) throw new Error("Missing parameters");
            const blogFound= await Blog.findByPk(blogId)
            if (!blogFound) throw new Error("Blog not found");
            await blogFound.destroy()
            
                return res.status(200).json("Blog deleted")

        } catch (error) {
           return res.status(500).json( `[Error delete Blog] - [deleteBlog - DELETE]: ${error.message}`)
               
           
        }
    },
};