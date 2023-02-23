
const { Service,Professional} = require('../../database/models');

module.exports = {
    getOneProfessional: async (req, res, next) => {
        try {
            const {professionalId} = req.params
            if (!professionalId) {
                throw new Error("Missing Parameters")
            }
              const professionalFound = await Professional.findAll({where:{id:professionalId},include:{model:Service}})

            return res.status(200).json(professionalFound)
        } catch (error) {
            return res.status(500).json(
                `[Error get One product] - [getOneProduct - GET]: ${error.message}`,
            )
        }
    },
};