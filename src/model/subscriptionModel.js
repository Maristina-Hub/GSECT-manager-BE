import mongoose from "mongoose";

const { Schema, model } = mongoose;

const subscriptionSchema = new Schema({
  product: {
    type: mongoose.Schema.ObjectId,
    ref: "product",
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
    required: true,
  },
  subscriptionPlan: {
    type: String,
    required: [true, "Please choose a subscription plan"],
    enum: ["none", "regular", "premium"],
    default: "none",
  },
  status: {
    type: String,
    required: true,
  },
  autoRenewal: {
    type: Boolean,
    default: false,
  },
  paidAt: {
    type: Date,
    required: true,
  },
});

export const Subscription = model("subscription", subscriptionSchema);
