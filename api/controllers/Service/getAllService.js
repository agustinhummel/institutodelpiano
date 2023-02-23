const { Service,Professional } = require('../../database/models');

module.exports = {
    getAllService: async (req, res, next) => {
        
     
        try {
            const allServices = await Service.findAll({include:{model:Professional}})


        return res.status(200).json(allServices)
 
        } catch (error) {
            return res.status(500).json(`[Error get all service] - [getAllservice - GET]: ${error.message}`)
          }
    },
};