const user = require("../models/User");

const router = require("express").Router();

const cryptoJs = require("crypto-js");

const jwt =require("jsonwebtoken");

//register
router.post("/register", async (req, res) => {
  const newUser = new user({
    username: req.body.username,
    email: req.body.email,
    password: cryptoJs.AES.encrypt(
      req.body.password,
      process.env.Pass_SecKey
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
    try {
      const userFind = await user.findOne({ username: req.body.username });
      if (!userFind) {
        return res.status(400).json({ message: "User not found" });
      }
  
      const hashPassword = cryptoJs.AES.decrypt(
        userFind.password,
        process.env.Pass_SecKey
      );
  
      const Password = hashPassword.toString(cryptoJs.enc.Utf8);
  
      if (Password !== req.body.password) {
          return res.status(401).json({ message: "Wrong credentials" });
          }


             const accessToken = jwt.sign({

                 id:userFind._id,
                 isAdmin:userFind.isAdmin,
                
             },
             process.env.ACCESS_TOKEN_SECRET,{
              expiresIn:"3d"  
             })

        const { password, ...others} =userFind._doc;

  
      res.status(200).json({...others,accessToken});
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
//   module.exports = router;

module.exports = router;
