
const { Opening } = require('../../database/models');

module.exports = {
    getOneOpening: async (req, res, next) => {
        try {
            const {openingId} = req.params
            if (!openingId) {
                throw new Error("Missing Parameters")
            }
              const openingFound = await Opening.findByPk(openingId)

            return res.status(200).json(openingFound)
        } catch (error) {
            return res.status(500).json(
                `[Error get One Opening ] - [getOneOpening - GET]: ${error.message}`,
            )
        }
    },
};