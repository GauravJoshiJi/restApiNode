const model = require("../model/product");
const Product = model.Product;
const mongoose = require("mongoose");

//Create
exports.createProduct = (req, res) => {
  //Here we are making new instance (Copy) for new data
  const product = new Product(req.body);
  product.save((err, doc) => {
    if (err) {
      //If error exist
      res.status(400).json(err);
    } else {
      res.status(201).json(doc);
    }
  });
};
//READ (using GET)=> this function is for reading all file data
exports.getAllProduct = async (req, res) => {
  //Here we are showing all data into database collection by using find function
  const products = await Product.find();
  res.json(products);
};
//READ (using GET)=> this function is for reading given file data
exports.getProduct = async (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;
  const products = await Product.findById(id).exec();
  res.json(products);
};
//UPDATE (using PUT) => this function is for updating only given changes
exports.replaceProduct = async (req, res) => {
  //here we are getting the selected id using params
  const id = req.params.id;
  try {
    //Showing the data if true
    const doc = await Product.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(doc);
  } catch (err) {
    //Showing the error is true
    console.log(err);
    res.status(400).json(err);
  }
};
//UPDATE (using PATCH) => this function is for updating all file data
exports.updateProduct = async (req, res) => {
  //here we are getting the selected id using params
  const id = req.params.id;
  try {
    //Showing the data if true
    const doc = await Product.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(doc);
  } catch (err) {
    //Showing the error if true
    console.log(err);
    res.status(400).json(err);
  }
};
//DELETE (using delete) => this function is for deleting files
exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  //here we are getting the selected id using params
  try {
    const doc = await Product.findOneAndDelete({ _id: id });
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
