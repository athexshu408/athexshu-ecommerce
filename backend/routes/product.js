const {
  verifyToken,
  verifyTokenAuth,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const Product = require("../models/Product");
const router = require("express").Router();
const cryptoJs = require("crypto-js");

// create

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// update
router.put("/:id", verifyTokenAuth, async (req, res) => {
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateProduct);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json(" Product has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET PRODUCT
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.status(200).json(product);
    //  res.status(200).json()
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  const qNew = req.query.new;

  const qCategory = req.query.category;
  let product;

  try {
    if (qNew) {
      product = await Product.find().sort({ _id: -1 }).limit(5);
    } else if (qCategory) {
      product = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      product = await Product.find();
    }

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
