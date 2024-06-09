const express = require("express");

const app = express();

const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");
const orderRoutes = require("./routes/order");



mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db connection established"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.get("/api/test", () => {
  console.log("success");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

app.use("/api/cart", cartRoutes);








// port is listening on port 5000
app.listen(process.env.PORT || 5000, () => {
  console.log("server is running on port 5000");
});
