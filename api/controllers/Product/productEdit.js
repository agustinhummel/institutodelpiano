const { Product} = require('../../database/models');


module.exports = {
    productEdit: async(req, res, next) => {
        

        try{            
            return res.status(200).json({messaje:"ok"})
                
            }
        catch (error) {
           return res.status(500).json(
               `[Error Edit products] - [EditProductProducts - GET]: ${error.message}`,
           )
       }
    }

}