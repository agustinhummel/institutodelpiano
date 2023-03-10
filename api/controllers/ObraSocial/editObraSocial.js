const { ObraSocial } = require('../../database/models');


module.exports = {
    editObraSocial: async (req, res, next) => {


        try {
            const {obraSocialId} = req.params 
            const {  name } = req.body;
            if (!name ) {
                throw new Error('missing parameters')
            }
            const obraSocialFound = await ObraSocial.findByPk(obraSocialId);

            if (!obraSocialFound) throw new Error("ObraSocial not found");
            const response = await obraSocialFound.update({ name });
            await obraSocialFound.save();
            return res.status(200).json(response)

        }
        catch (error) {
            return res.status(500).json(
                `[Error Edit ObraSocial] - [editObraSocial - PUT]: ${error.message}`,
            )
        }
    }

}