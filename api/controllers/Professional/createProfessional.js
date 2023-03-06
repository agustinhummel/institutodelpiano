const { Service,Professional } = require('../../database/models');

module.exports = {
    createProfessional: async (req, res, next) => {
       const {fullName, avatar,phone,services } = req.body;

        try {
            
            if (!fullName, !services) {
                return res.json({error:"faltan parametros"})
            }

            let attribute = {fullName}
            avatar ? attribute.avatar=avatar : null
            phone ? attribute.phone = phone : null

            const newProfessional = await Professional.create(attribute)

            const dbServices = await Service.findAll({
                    where: {
                        name: services
                    }
                });
            newProfessional.addServices(dbServices); 
            return res.status(201).json(newProfessional)

        } catch (error) {
            return res.status(404).json(`[Error get professional] - [professional - GET]: ${error.message}`)

        }
    }
};