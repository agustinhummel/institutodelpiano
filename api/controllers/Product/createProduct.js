const { Product } = require('../../database/models');

module.exports = {
    createProducts: async (req, res, next) => {
        const { name, description, image, price, stoc } = req.body;

        try {
        

            return res.status(201).json({messaje:"ok"})
            

        } catch (error) {
            return res.status(404).json(`[Error post products] - [product - POST]: ${error.message}`)

        }
    }
};