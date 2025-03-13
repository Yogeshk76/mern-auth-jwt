const jwt = require("jsonwebtoken");

const ensuredAuthenticated = (req, res, next) => {
  const auth = req.headers["authorization"].split(" ")[1];
  if (!auth) {
    return res.status(401).json({ message: "Unauthorized", success: false });
  }
  try {
      const decoded = jwt.verify(auth, process.env.JWT_SECRET);
      req.user = decoded;
      next();
  }
  catch(err) {
      return res.status(401).json({ message: "Unauthorized", success: false });
  }
};

module.exports = {
  ensuredAuthenticated
};