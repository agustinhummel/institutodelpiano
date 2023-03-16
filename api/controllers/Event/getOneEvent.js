
const { Event } = require('../../database/models');

module.exports = {
    getOneEvent: async (req, res, next) => {
        try {
            const {eventId} = req.params
            if (!eventId) {
                throw new Error("Missing Parameters")
            }
              const eventFound = await Event.findByPk(eventId)

            return res.status(200).json(eventFound)
        } catch (error) {
            return res.status(500).json(
                `[Error get One Event ] - [getOneEvent - GET]: ${error.message}`,
            )
        }
    },
};