const { Opening } = require('../../database/models');

module.exports = {
    getAllOpening: async (req, res, next) => {
        
     
        try {
            const allOpening = await Opening.findAll()


        return res.status(200).json(allOpening)
 
        } catch (error) {
            return res.status(500).json(`[Error get all Opening] - [allOpening - GET]: ${error.message}`)
          }
    },
};