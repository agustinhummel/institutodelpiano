const { User } = require("../../database/models");
const bcrypt = require('bcrypt')

module.exports = {
  editUser: async (req, res, next) => {
    try {
      const { userId, fullName, password, phone, email,isAdmin } = req.body;
      if (!userId || !fullName || !password || !phone ||!email || !isAdmin)
        throw new Error("Missing parameters");

      const userFound = await User.findByPk(userId);

      if (!userFound) throw new Error("User not found");
      const hasedPass = password ? await bcrypt.hash(password,10) : ""
      const response = await userFound.update({ fullName, password:hasedPass, phone, email ,isAdmin});
      await userFound.save();

      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json(
        `[Error Edit User] - [UserEditController - PUT]: ${error.message}`
      );
     }
  },
};
