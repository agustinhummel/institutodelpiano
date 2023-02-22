const { User } = require('../../database/models')


module.exports = {
  getAllUser: async (req, res, next) => {
    
    try{

      const response = await User.findAll()

      return res.status(200).json(response)

    }catch(error){
        return res.status(500).json(
            `[Error Get All Users] - [GetAllUsersController - GET]: ${error.message}`,
          )
    }
  }
}