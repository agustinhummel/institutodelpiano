const { Service } = require('../../database/models');


module.exports = {
    editService: async (req, res, next) => {


        try {

            const { serviceId, name, description, image, price } = req.body;
            if (!serviceId || !name || !description || !image || !price || !category) {
                throw new Error('Faltan Parametros')
            }
            const serviceFound = await Service.findByPk(serviceId);

            if (!serviceFound) throw new Error("Servicio no encontrado");
            const response = await serviceFound.update({ name, description, image, price, category});
            await serviceFound.save();
            return res.status(200).json(response)

        }
        catch (error) {
            return res.status(500).json(
                `[Error Edit service] - [EditService - PUT]: ${error.message}`,
            )
        }
    }

}