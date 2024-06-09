const {
    verifyToken,
    verifyTokenAuth,
    verifyTokenAndAdmin,
  } = require("./verifyToken");
  const Order = require("../models/Order");
  const router = require("express").Router();
//   const cryptoJs = require("crypto-js");
  
  // create
  
  router.post("/", verifyToken, async (req, res) => {
    const newOrder = new Order(req.body);
  
    try {
      const savedOrder = await newOrder.save();
      res.status(201).json(savedOrder);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // update
  router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
      const updateOrder = await Order.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updateOrder);
    } catch (err) {
      console.log(err);
    }
  });
  
  router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
      await Order.findByIdAndDelete(req.params.id);
      res.status(200).json(" Order has been deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // GET PRODUCT
  router.get("/find/:id", async (req, res) => {
    try {
      const order = await Order.findById(req.params.id);
  
      res.status(200).json(order);
      //  res.status(200).json()
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get("/",verifyTokenAndAdmin ,async (req, res) => {
    
  
    try {
      const order = await Order.find();
       
  
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

  router.get("/income" ,verifyTokenAndAdmin,async (req, res) => {



    const date = new Date();

    const lastMonth  = new Date(date.setMonth(date.getMonth() -1));
    
    const previoismonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
    try{

        const income = await Order.aggregate([

            {$match:{createdAt: {$gte: previoismonth}}},
        {
            $project:{
                month:{$month:"$createdAt"},
            sales:"$amount",
        }
    },
    {
        $group:{
            _id:"$month",
        total:{$sum:"$sales"},
    }
}


]);
res.status(200).json(income)
    }catch (err) {
        res.status(500).json(err);
    }
  })
  
  module.exports = router;
  