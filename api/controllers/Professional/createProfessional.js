const { Service,Professional } = require('../../database/models');

module.exports = {
    createProfessional: async (req, res, next) => {
       const {fullName, email, avatar,phone,services } = req.body;

        try {
            
            if (!fullName || !email || !avatar || !phone) {
                throw new Error('missing parameters')
            }

            const newProfessional = await Professional.create({fullName,email,avatar,phone})

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