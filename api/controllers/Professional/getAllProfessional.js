const { Service,Professional } = require('../../database/models');

module.exports = {
    getAllProfessional: async (req, res, next) => {
        
     
        try {
            const allProfessional = await Professional.findAll({include:{model:Service}})


        return res.status(200).json(allProfessional)
 
        } catch (error) {
            return res.status(500).json(`[Error get all products] - [getAllProducts - GET]: ${error.message}`)
          }
    },
};