
const { User } = require('../../database/models')



module.exports = {
  userDelete: async (req, res, next) => {
    
    try {
        const { userId } = req.params;
        if (!userId) throw new ErrorObject("Missing parameters", 404);
        const userFound = await User.findByPk(userId);

        if (!userFound) throw new Error("User not found");
      
        const response = await userFound.destroy({
            where: { id:userId },
          });

          return res.status(200).json(response)
        } catch (error) {
          return res.status(500).json(
            `[Error Delete User] - [UserDeleteController - DELETE]: ${error.message}`
          );

        }
      },
    };