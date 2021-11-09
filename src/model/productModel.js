import mongoose from "mongoose";

const { Schema, model } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please Enter Product Name"],
    trim: true,
  },
  image: { type: String },
  subscriptionType: {
    type: String,
    required: [true, "Please choose a subscription type"],
    default: "monthly",
  },
  price: {
    type: Number,
    required: [true, "Please Enter a Product Price"],
  },
  category: {
    type: String,
    required: [true, "Please Enter Product Category"],
  },
  dueAt: {
    type: Date,
    default: null,
  },
});

export const Product = model("product", productSchema);
