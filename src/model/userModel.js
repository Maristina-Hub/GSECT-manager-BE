import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const { Schema, model } = mongoose;
const { isEmail } = validator;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please enter an email"],
      unique: true,
      lowercase: true,
      validate: [isEmail, "Please enter a valid email"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please enter a password"],
      minLength: 6,
      select: false,
    },
    role: {
      type: String,
      enum: ["admin", "normal"],
      default: "normal",
    },
    subscriptionType: {
      type: String,
      enum: ["regular", "premium", "platinum"],
      default: "regular",
    },
    imgurl: String,
    resetPasswordToken: String,
    resetPasswordExipre: Date,
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.matchPasswords = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.getSignedToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

export const User = model("user", userSchema);
