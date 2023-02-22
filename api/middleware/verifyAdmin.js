
module.exports = {
  ownership: async (req, res, next) => {
    try {

      if (req.user.isAdmin !== false)
        throw new Error('You dont have permission to access');

      next();
    } catch (error) {
      return res.status(500).json(
        `[Error ownerShip] - [Middleware - Autorization]: ${error.message}`
      );
    }
  }
}