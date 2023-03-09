const { ObraSocial } = require('../../database/models');

module.exports = {
    createObraSocial: async (req, res, next) => {
        const { name } = req.body;

        try {
            
            if (!name ) {
                throw new Error('missing parameters')
            }

            const newObraSocial = await ObraSocial.create({name})

            return res.status(201).json(newObraSocial)

        } catch (error) {
            return res.status(404).json(`[Error ObraSocial ObraSocial] - [ObraSocial - ObraSocial]: ${error.message}`)

        }
    }
};