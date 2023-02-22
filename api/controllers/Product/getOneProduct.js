
const { Product} = require('../../database/models');




module.exports = {
    getOneProduct: async (req, res, next) => {
        try {
          
            return res.status(200).json({messaje:"ok"})
        } catch (error) {
            return res.status(500).json(
                `[Error get One product] - [getOneProduct - GET]: ${error.message}`,
            )
        }
    },
};