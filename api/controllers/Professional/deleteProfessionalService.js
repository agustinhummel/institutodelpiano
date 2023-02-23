const { Professional,Service } = require('../../database/models');

module.exports = {
    deleteProfessionalService: async (req, res, next) => {
        const { professionalId,services } = req.body;
        try{
            if (!professionalId) throw new Error("Missing parameters");
            const professionalFound= await Professional.findByPk(professionalId)
            if (!professionalFound) throw new Error("Professional not found");

            const dbServices = await Service.findAll({
                where: {
                    name: services
                }
            });

            await professionalFound.removeService(dbServices)
            
                return res.status(200).json(professionalFound)

        } catch (error) {
           return res.status(500).json( `[Error delete professional] - [deleteprofessionalService - PUT]: ${error.message}`)
               
           
        }
    },
};
