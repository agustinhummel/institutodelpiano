const { Service } = require('../../database/models');

module.exports = {
    deleteService: async (req, res, next) => {
        const { serviceId } = req.params;
        try{
            if (!serviceId) throw new Error("Missing parameters");
            const serviceFound= await Service.findByPk(serviceId)
            if (!serviceFound) throw new Error("Service not found");
            await serviceFound.destroy()
            
                return res.status(200).json("Service deleted")

        } catch (error) {
           return res.status(500).json( `[Error delete service] - [deleteService - DELETE]: ${error.message}`)
               
           
        }
    },
};
