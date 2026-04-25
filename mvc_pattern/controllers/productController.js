const Product = require("../models/product");

//buisness logic

const getProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();

    if (!allProducts || allProducts.length === 0) {
      res.status(404).json({
        success: false,
        message: "Resource not found or no products available !",
      });
    }
    // if we have products
    res.status(200).json({
      success: true,
      products: allProducts,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// add a product
const addProduct = async (req, res) => {
  console.log("POST req for products..");

  try {
    const { name, price, description, category } = req.body;

    if (!name || !price || !description || !category) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const newProduct = new Product({
      name,
      price,
      description,
      category,
    });

    await newProduct.save();

    res.status(201).json({
      success: true,
      message: "Product added successfully",
      product: newProduct,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// update a product
const updateProduct = async (req, res) => {
  console.log("got a put req for products");
  try {
    const { id } = req.params;
    const { name, price, description, category } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        name,
        price,
        description,
        category,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "product updated successfully",
      product: updatedProduct,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// delete a product
const deleteProduct = async (req, res) => {
  console.log("got a delete req for products");

  try {
    const { id } = req.params;

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      product: deletedProduct,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = { getProducts, addProduct, updateProduct, deleteProduct };
