const { Post } = require('../../database/models');

module.exports = {
    createPost: async (req, res, next) => {
        const { title, description,image,autor } = req.body;

        try {
            
            if (!title || !description || !image || !autor ) {
                throw new Error('missing parameters')
            }

            const newService = await Post.create({title,description,image,autor})

            return res.status(201).json(newService)

        } catch (error) {
            return res.status(404).json(`[Error post Post] - [Post - POST]: ${error.message}`)

        }
    }
};