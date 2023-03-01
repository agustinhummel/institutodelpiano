
const { Service,Professional} = require('../../database/models');

module.exports = {
    getOneService: async (req, res, next) => {
        try {
            const {serviceId} = req.params
            if (!serviceId) {
                throw new Error("Missing Parameters")
            }
              const serviceFound = await Service.findByPk(serviceId,{include:{model:Professional}})

            return res.status(200).json(serviceFound)
        } catch (error) {
            return res.status(500).json(
                `[Error get One service] - [getOneService - GET]: ${error.message}`,
            )
        }
    },
};