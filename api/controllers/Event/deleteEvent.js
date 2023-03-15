const { Event } = require('../../database/models');

module.exports = {
    deleteEvent: async (req, res, next) => {
        const { eventId } = req.params;
        try{
            if (!eventId) throw new Error("Missing parameters");
            const eventFound= await Event.findByPk(eventId)
            if (!eventFound) throw new Error("Event not found");
            await eventFound.destroy()
            
                return res.status(200).json("Event deleted")

        } catch (error) {
           return res.status(500).json( `[Error delete Event] - [deletePost - DELETE]: ${error.message}`)
               
           
        }
    },
};