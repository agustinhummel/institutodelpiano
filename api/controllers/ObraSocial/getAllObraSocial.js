const { ObraSocial } = require('../../database/models');

module.exports = {
    getAllObraSocial: async (req, res, next) => {
        
     
        try {
            const allObraSocial = await ObraSocial.findAll()


        return res.status(200).json(allObraSocial)
 
        } catch (error) {
            return res.status(500).json(`[Error get all ObraSocial] - [allObraSocial - GET]: ${error.message}`)
          }
    },
};