const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
const { User } = require("../../database/models");
dotenv.config();

module.exports = {
  loginUser: async (req, res, next) => {
    try {
      const user = await User.findOne({ where: { email: req.body.email } });
      if (!user) return  res.json({error:`El email: ${req.body.email} no existe`})


        const validatePass = await bcrypt.compare(req.body.password, user.password)
        if(!validatePass) return res.json({error:"Has ingresado una contraseña erronea"})
        let token = jwt.sign({ id: user.id,email:user.email }, process.env.JWT_SECRETO, {expiresIn: '20h'})
      
    
      return res.status(200).json({accessToken:token})

    } catch (error) {
      return res.status(500).json(`[Error auth login] - [loginController - POST]: ${error.message}`
        ) 

    }
  }
};