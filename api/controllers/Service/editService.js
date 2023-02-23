const { Service } = require('../../database/models');


module.exports = {
    editService: async (req, res, next) => {


        try {

            const { serviceId, name, description, image, price } = req.body;
            if (!serviceId || !name || !description || !image || !price) {
                throw new Error('missing parameters')
            }
            const serviceFound = await Service.findByPk(serviceId);

            if (!serviceFound) throw new Error("Service not found");
            const response = await serviceFound.update({ name, description, image, price });
            await serviceFound.save();
            return res.status(200).json(response)

        }
        catch (error) {
            return res.status(500).json(
                `[Error Edit products] - [EditProductProducts - GET]: ${error.message}`,
            )
        }
    }

}