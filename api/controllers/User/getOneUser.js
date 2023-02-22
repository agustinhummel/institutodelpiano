const { User } = require("../../database/models");

module.exports = {
  getOneUser: async (req, res, next) => {
    try {
      const { userId } = req.params;

      const userFound = await User.findByPk(userId);
      if (!userFound) throw new Error("User not found");

      return res.status(200).json(userFound)
      
    } catch (error) {
     return res.status(500).json(
        `[Error Get One User] - [getOneUserController - GET]: ${error.message}`
      );
    }
  },
};
