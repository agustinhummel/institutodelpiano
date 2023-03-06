const { Professional,Service } = require('../../database/models');


module.exports = {
    editProfessional: async (req, res, next) => {

        try {
            
            const { id,fullName, avatar,phone , services} = req.body;
             
            if (!fullName || !avatar || !phone || !services) {
                throw new Error('missing parameters')
            }
            const professionalFound = await Professional.findByPk(id);
            if (!professionalFound) throw new Error("Professional not found");
            const response = await professionalFound.update({ fullName, avatar,phone  });

            const dbServices = await Service.findAll({
                where: {
                    name: services
                }
            });
            await professionalFound.save();
            professionalFound.addService(dbServices); 
           
            return res.status(200).json(response)

        }
        catch (error) {
            return res.status(500).json(
                `[Error Edit professional] - [Editprofessional - PUT]: ${error.message}`,
            )
        }
    }

}