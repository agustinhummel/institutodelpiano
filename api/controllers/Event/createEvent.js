const { Event } = require('../../database/models');

module.exports = {
    createEvent: async (req, res, next) => {
        const { name, start, end, description } = req.body;

        try {
            
            if (!name, !start, !end, !description  ) {
                throw new Error('missing parameters')
            }

            const newEvent = await Event.create({name, start, end, description })

            return res.status(201).json(newEvent)

        } catch (error) {
            return res.status(404).json(`[Error Event Event] - [Event - Event]: ${error.message}`)

        }
    }
};