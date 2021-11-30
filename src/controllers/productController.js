import { Product } from "../model/productModel.js";
import ErrorResponse from "../utils/errorResponse.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json({ success: true, products });
  } catch (error) {
    return res.status(500).json({
      status: "Failed",
      error: error.message,
    });
  }
};

export const getproductDetails = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return next(new ErrorResponse("Product not found", 404));
    }

    res.status(200).json({ success: true, product });
  } catch (error) {
    return res.status(500).json({
      status: "Failed",
      error: error.message,
    });
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      product.name = req.body.productName;
      product.price = req.body.price;
      product.image = req.body.image;
      product.category = req.body.category;
      product.subscriptionPlan = req.body.subscriptionPlan;
      product.billingCycle = req.body.billingCycle;
      product.remindMe = req.body.remindMe;

      const updatedProduct = await product.save();
      res
        .status(200)
        .json({ message: "Product Updated", product: updatedProduct });
    } else {
      return next(new ErrorResponse("Product not found", 404));
    }
  } catch (error) {
    return res.status(500).json({
      status: "Failed",
      error: error.message,
    });
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return next(new ErrorResponse("Product not found", 404));
    }

    await product.remove();

    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    return res.status(500).json({
      status: "Failed",
      error: error.message,
    });
  }
};

// module.exports = {
//   getAllProducts,
//   getproductDetails,
//   updateProduct,
//   deleteProduct,
// };
