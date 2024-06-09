const {
    verifyToken,
    verifyTokenAuth,
    verifyTokenAndAdmin,
  } = require("./verifyToken");
  const Cart = require("../models/Cart");
  const router = require("express").Router();
 
  
  // create
  
  router.post("/", verifyToken, async (req, res) => {
    const newCart = new Cart(req.body);
  
    try {
      const savedCart = await newCart.save();
      res.status(201).json(savedCart);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // update
  router.put("/:id", verifyTokenAuth, async (req, res) => {
    try {
      const updateCart = await Cart.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updateCart);
    } catch (err) {
      console.log(err);
    }
  });
  
  router.delete("/:id", verifyTokenAuth, async (req, res) => {
    try {
      await Cart.findByIdAndDelete(req.params.id);
      res.status(200).json(" Cart product has been deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // GET PRODUCT
  router.get("/find/:id", async (req, res) => {
    try {
      const cart = await Cart.findById(req.params.id);
  
      res.status(200).json(cart);
      //  res.status(200).json()
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get("/",verifyTokenAndAdmin ,async (req, res) => {
    
  
    try {
      const carts = await Cart.find();
       
  
      res.status(200).json(carts);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  
  module.exports = router;
  