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
            throw new Error("The owner of this token does not exist anymore"
            );
        }

        req.user = user;
        next();

    } catch (error) {
        return res.status(500).json(
            `[Error verify User] - [verifyUser- Middleware]: ${error.message}`
        );
    }
};



module.exports = {
    verifyUser,
}
