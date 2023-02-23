const { Email } = require('../../database/models')


module.exports = {
    createEmail: async (req, res, next) => {
        const {email}= req.body
        try {
           
            const emailCreated= await Email.create({email})

                return res.status(201).send(emailCreated)
            }catch(error){

                return res.status(500).json(`[Error post mailer] - [email - POST]: ${error.message}`) 

        }
    }
}