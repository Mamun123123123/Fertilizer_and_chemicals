import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: String,
    category: String,
    type: String,
    price: Number,
    image: String,
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);