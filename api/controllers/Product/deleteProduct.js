const { Product } = require('../../database/models');

module.exports = {
    deleteProduct: async (req, res, next) => {
        const { productId } = req.params;
        try{

        return res.status(200).json({messaje:"ok"})

        } catch (error) {
           return res.status(500).json( `[Error deleting products] - [deleteProducts - DELETE]: ${error.message}`)
               
           
        }
    },
};
