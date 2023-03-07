const jwt = require('jsonwebtoken');
const { User } = require('../database/models');


const verifyUser = async (req, res, next) => {
    try {
        const { authorization } = req.headers;
        const token = authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.SECRETO);

        const user = await User.findOne({
            where: { id: decoded.id },
        });
        if (!user) {
            return res.json({error: "el dueño de este token no existe"})
        }

        req.user = user;
        next();

    } catch (error) {
        return res.json({error:error.message})
    }
};



module.exports = {
    verifyUser,
}
