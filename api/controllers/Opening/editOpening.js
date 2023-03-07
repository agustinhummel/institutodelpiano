const { Opening } = require('../../database/models');


module.exports = {
    editOpening: async (req, res, next) => {


        try {
            const {openingId} = req.params 
            const {  name, description } = req.body;
            if (!name || !description ) {
                throw new Error('missing parameters')
            }
            const openingFound = await Opening.findByPk(openingId);

            if (!openingFound) throw new Error("Opening not found");
            const response = await openingFound.update({ name, description});
            await openingFound.save();
            return res.status(200).json(response)

        }
        catch (error) {
            return res.status(500).json(
                `[Error Edit Opening] - [editOpening - PUT]: ${error.message}`,
            )
        }
    }

}