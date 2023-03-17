const { Service } = require('../../database/models');

module.exports = {
    createService: async (req, res, next) => {
        const { name, description,image,price,category } = req.body;

        try {
            if (!name || !description || !image || !price || !category) {
                return res.json({error:"Faltan parametros"})
            }

            const newService = await Service.create({name,description,image,price,category})

            return res.status(201).json(newService)

        } catch (error) {
            return res.status(500).json(`[Error post service] - [service - POST]: ${error.message}`)

        }
    }
};