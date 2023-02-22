const transporter = require('../../config/mailer.js')
const { User } = require('../../database/models');
const bcrypt = require('bcrypt')

module.exports = {
    
    recoverPassword: async (req, res, next) => {
        
        const password = passwordCreate()
        const hasedPass = await bcrypt.hash(password,10)
        const { email } = req.body
        try {
            const user = await User.findOne({where:{email:email}})
            await User.update({password: hasedPass}, {where:{id: user.id}})

            await transporter.sendMail({
                from: '"Nombre de Empresa" <test@test.com>',
                to: email,
                subject: "recover password petition. 🔒✔",
                html:
                    `<h1>Hi! ${user.fullName} ..</h1>
                <h2>this is your temp password: ${password}.</h2>
                <h3>please change the password for security...</h3>
                <img width={200} src="https://media.tenor.com/9Ez46wr-voMAAAAC/lock.gif" alt="" />
                `
            })

            return res.status(201).send('Email Enviado')
        } catch (error) {

            return res.status(500).json(`[Error post mailer] - [email - POST]: ${error.message}`) 

        }
    }
}

//aditional function for create password code
function passwordCreate() {
    let newPass = ""
    const leters = ["A", "X", "R", "W", "T", "G", "S"]

    for (let i = 0; i < 2; i++) {
        for (let x = 0; x < 4; x++) {
            i === 0
                ?
            newPass += leters[Math.round(Math.random() * (leters.length - 1))]
                :
            newPass += Math.round(Math.random() * 9)
        }
    } return newPass.slice(0, 4) + "-" + newPass.slice(4)
}