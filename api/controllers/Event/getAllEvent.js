const { Event } = require('../../database/models');

module.exports = {
    getAllEvent: async (req, res, next) => {
        
     
        try {
            const allEvent = await Event.findAll()


        return res.status(200).json(allEvent)
 
        } catch (error) {
            return res.status(500).json(`[Error get all Event] - [allEvent - GET]: ${error.message}`)
          }
    },
};