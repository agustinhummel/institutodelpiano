const { ObraSocial } = require('../../database/models');

module.exports = {
    deleteObraSocial: async (req, res, next) => {
        const { obraSocialId } = req.params;
        try{
            if (!obraSocialId) throw new Error("Missing parameters");
            const obraSocialFound= await ObraSocial.findByPk(obraSocialId)
            if (!obraSocialFound) throw new Error("ObraSocial not found");
            await obraSocialFound.destroy()
            
                return res.status(200).json("ObraSocial deleted")

        } catch (error) {
           return res.status(500).json( `[Error delete ObraSocial] - [deletePost - DELETE]: ${error.message}`)
               
           
        }
    },
};