const { Service,Professional } = require('../../database/models');

module.exports = {
    getAllProfessional: async (req, res, next) => {
        
     
        try {
            const allProfessional = await Professional.findAll({include:{model:Service,attributes: ['name', 'id']}})


        return res.status(200).json(allProfessional)
 
        } catch (error) {
            return res.status(500).json(`[Error get all professional] - [getAllprofessional - GET]: ${error.message}`)
          }
    },
};