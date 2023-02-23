const { User } = require('../../database/models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');

dotenv.config();


module.exports = {
  createUser: async (req, res, next) => {
    let { userName, email, password} = req.body;
 
    try{
       const userEmail = await User.findAll({
        where: {
          email: email
            }
      })
      if(userEmail.length){
          return  res.json({error:"That email is already in use"})
      }

      const hasedPass = password ? await bcrypt.hash(password,10) : ""

      const userCreated = await User.create({
        userName, email,password:hasedPass
      })
      
      const token = jwt.sign( {user:userCreated} , process.env.JWT_SECRETO, {expiresIn: '1h'})

      return res.status(201).json(token)

    }catch(error){
        return res.status(500).json(
            `[Error create users] - [UserCreateControllers - POST]: ${error.message}`,
          )
    }
  }
}