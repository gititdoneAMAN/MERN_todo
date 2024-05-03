const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  const token = req.headers.authorization;

  if (!token || !token.startsWith("Bearer ")) {
    return res.status(403).json({ msg: "Unauthorised Access" });
  } else {
    try {
      const tokenData = token.split(" ")[1];
      const userId = jwt.verify(tokenData, process.env.JWT_SECRET);
      req.userId = userId;
      console.log(req.userId);
      next();
    } catch (err) {
      res.status(400).json({ msg: "Invalid Token" });
    }
  }
}

module.exports = {
  authMiddleware,
};
