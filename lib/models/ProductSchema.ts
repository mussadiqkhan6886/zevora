import mongoose, { Schema } from "mongoose";
import { unique } from "next/dist/build/utils";

const ProductSchema = new Schema({
    name: {type: String, require: true},
    slug: {type: String, require: true, unique: true},
    category: {type: String, require: true},
    price: {type: Number, require: true},
    salePrice: {type: Number, default: null},
    onSale: {type: Boolean, default: false},
    stock: {type: Number, require: true},
    description: {type: String, require: true},
    keywords: {type: [String], require: true},
    sizes: {type: [String], default: null},
    volume: {type: String, default: null},
    fragranceType: {type: String, default: null}
},{
    timestamps: true
}
)

export default mongoose.models.Product || mongoose.model("Product", ProductSchema) 