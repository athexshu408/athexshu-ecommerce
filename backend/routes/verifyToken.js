const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) res.status(403).json("Token is not valid!!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authorized to access this");
  }
};

const verifyTokenAuth = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        next();
    }else{
        res.status(403).json("you are not allowed to access this");
    }
  });
};


const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
      if ( req.user.isAdmin) {
          next();
      }else{
          res.status(403).json("you are not allowed to access this");
      }
    });
  };

module.exports = { verifyTokenAndAdmin,verifyToken,verifyTokenAuth };
