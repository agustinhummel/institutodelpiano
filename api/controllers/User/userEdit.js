const { User } = require("../../database/models");
const bcrypt = require('bcrypt')

module.exports = {
  editUser: async (req, res, next) => {
    try {
      const { userId, userName, password,email} = req.body;
      if (!userId || !userName || password!= "" && !password || !email )
        throw new Error("Faltan Parametros");

        const userFound = await User.findByPk(userId);
        if (!userFound) throw new Error("Usuario No encontrado");
        let response
        if (password == "") {
          response = await userFound.update({ userName,email});
        }else{
          const hasedPass = password ? await bcrypt.hash(password,10) : ""
          response = await userFound.update({ userName, password:hasedPass,email});
        }
     
      await userFound.save();

      return res.status(200).json(response)
    } catch (error) {
      return res.json({error:error.message});
     }
  },
};
