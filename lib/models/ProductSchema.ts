import mongoose, { Schema } from "mongoose";

const VariantSchema = new Schema({
  label: { type: String, required: true }, 
  // "S", "M", "L", "100ml"

  sku: { type: String, required: true, unique: true },

  price: { type: Number, required: true },
  salePrice: { type: Number, default: null },
  onSale: { type: Boolean, default: false },

  stock: { type: Number, required: true },

  attributes: {
    size: { type: String, default: null },
    volume: { type: String, default: null }
  }
});

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },

    description: { type: String, required: true },
    keywords: { type: [String], required: true },

    images: { type: [String], required: true },

    hasVariants: { type: Boolean, default: false },

    variantType: {
      type: String,
      enum: ["size", "volume", null],
      default: null
    },

    fragranceType: { type: String, default: null },

    variants: { type: [VariantSchema], required: true }
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
