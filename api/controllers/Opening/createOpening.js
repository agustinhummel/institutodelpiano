const { Opening } = require('../../database/models');

module.exports = {
    createOpening: async (req, res, next) => {
        const { name, description} = req.body;

        try {
            
            if (!name || !description ) {
                throw new Error('missing parameters')
            }

            const newOpening = await Opening.create({name,description})

            return res.status(201).json(newOpening)

        } catch (error) {
            return res.status(404).json(`[Error Opening Opening] - [Opening - Opening]: ${error.message}`)

        }
    }
};