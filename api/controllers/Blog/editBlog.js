const { Blog } = require('../../database/models');


module.exports = {
    editBlog: async (req, res, next) => {


        try {
            const {blogId} = req.params 
            const {  title, description, image, autor } = req.body;
            if (!title || !description || !image || !autor) {
                throw new Error('missing parameters')
            }
            const blogFound = await Blog.findByPk(blogId);

            if (!blogFound) throw new Error("Blog not found");
            const response = await blogFound.update({ title, description, image, autor });
            await blogFound.save();
            return res.status(200).json(response)

        }
        catch (error) {
            return res.status(500).json(
                `[Error Edit Blog] - [EditBlog - PUT]: ${error.message}`,
            )
        }
    }

}