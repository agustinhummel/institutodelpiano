const { Opening } = require('../../database/models');

module.exports = {
    deleteOpening: async (req, res, next) => {
        const { openingId } = req.params;
        try{
            if (!openingId) throw new Error("Missing parameters");
            const openingFound= await Opening.findByPk(openingId)
            if (!openingFound) throw new Error("Opening not found");
            await openingFound.destroy()
            
                return res.status(200).json("Opening deleted")

        } catch (error) {
           return res.status(500).json( `[Error delete Opening] - [deletePost - DELETE]: ${error.message}`)
               
           
        }
    },
};