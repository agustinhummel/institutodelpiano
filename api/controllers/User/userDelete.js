
const { User } = require('../../database/models')



module.exports = {
  userDelete: async (req, res, next) => {
    
    try {
        const { userId } = req.params;
        if (!userId) throw new ErrorObject("Faltan Parametros", 404);
        const userFound = await User.findByPk(userId);

        if (!userFound) throw new Error("Usuario no encontrado");
      
        const response = await userFound.destroy({
            where: { id:userId },
          });

          return res.status(200).json('Usuario Eliminado Exitosamente')
        } catch (error) {
          return res.status(500).json(
            `[Error Delete User] - [UserDeleteController - DELETE]: ${error.message}`
          );

        }
      },
    };