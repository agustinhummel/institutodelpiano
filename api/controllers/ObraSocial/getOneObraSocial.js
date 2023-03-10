
const { ObraSocial } = require('../../database/models');

module.exports = {
    getOneObraSocial: async (req, res, next) => {
        try {
            const {obraSocialId} = req.params
            if (!obraSocialId) {
                throw new Error("Missing Parameters")
            }
              const obraSocialFound = await ObraSocial.findByPk(obraSocialId)

            return res.status(200).json(obraSocialFound)
        } catch (error) {
            return res.status(500).json(
                `[Error get One ObraSocial ] - [getOneObraSocial - GET]: ${error.message}`,
            )
        }
    },
};