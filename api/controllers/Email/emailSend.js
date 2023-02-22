const transporter = require('../../config/mailer.js')

module.exports = {
    sendEmail: async (req, res, next) => {
        const { email, fullName}= req.body
        try {
            await transporter.sendMail({
                from: '"Nombre Empresa" <test@test>', 
                to: email, 
                subject: "Email-Registered 📧✔", 
                html: 
                `<h1>Hi! ${fullName}...</h1>
                <h2>Your email was successfully registered.</h2>
                <img width={200} src="https://i.pinimg.com/originals/ca/9c/d3/ca9cd37ececba2e35ea0c63349d5921f.gif" alt="" />
                ` 
              }) 

                return res.status(201).send('Email Enviado')
            }catch(error){

                return res.status(500).json(`[Error post mailer] - [email - POST]: ${error.message}`) 

        }
    }
}