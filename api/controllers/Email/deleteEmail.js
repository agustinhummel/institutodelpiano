const { Email } = require('../../database/models')


module.exports = {
    deleteEmail: async (req, res, next) => {
        const {emailId}= req.params
        try {
            if (!emailId) throw new Error("Missing parameters");
            const emailFound= await Email.findByPk(emailId)
            if (!emailFound) throw new Error("Email not found");
            await emailFound.destroy()
            
                return res.status(200).json("Email deleted")
            }catch(error){

                return res.status(500).json(`[Error post mailer] - [email - POST]: ${error.message}`) 

        }
    }
}