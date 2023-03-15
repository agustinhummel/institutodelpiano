const { Event } = require('../../database/models');


module.exports = {
    editEvent: async (req, res, next) => {


        try {
            const {eventId} = req.params 
            const {  name, start, end, description  } = req.body;
            if (!name, !start, !end, !description  ) {
                throw new Error('missing parameters')
            }
            const eventFound = await Event.findByPk(eventId);

            if (!eventFound) throw new Error("Event not found");
            const response = await eventFound.update({ name, start, end, description   });
            await eventFound.save();
            return res.status(200).json(response)

        }
        catch (error) {
            return res.status(500).json(
                `[Error Edit Event] - [editEvent - PUT]: ${error.message}`,
            )
        }
    }

}