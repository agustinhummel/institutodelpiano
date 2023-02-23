const { Professional } = require('../../database/models');

module.exports = {
    deleteProfessional: async (req, res, next) => {
        const { professionalId } = req.params;
        try{
            if (!professionalId) throw new Error("Missing parameters");
            const professionalFound= await Professional.findByPk(professionalId)
            if (!professionalFound) throw new Error("Professional not found");

            await professionalFound.destroy()
            
                return res.status(200).json("Professional deleted")

        } catch (error) {
           return res.status(500).json( `[Error deleting products] - [deleteProducts - DELETE]: ${error.message}`)
               
           
        }
    },
};
