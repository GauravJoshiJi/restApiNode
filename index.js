const express = require("express");
const mongoose = require("mongoose");
const server = express();
const port = 8000;

const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

//DB Connection Code
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
  console.log("database connected");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
//Schema

//Body parser
server.use(express.json());
server.use("/products", productRouter.router);
server.use("/users", userRouter.router);

//starting the server
server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
