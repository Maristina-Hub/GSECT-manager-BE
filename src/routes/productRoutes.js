import express from "express";
import {
  getAllProducts,
  getproductDetails,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

import { isAuth } from "../middleware/auth.js";

const router = express.Router();

router.route("/products").get(getAllProducts);

router
  .route("/products/:id")
  .get(isAuth, getproductDetails)
  .put(isAuth, updateProduct)
  .delete(isAuth, deleteProduct);

export default router;
