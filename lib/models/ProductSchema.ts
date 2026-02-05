import { Schema } from "mongoose";
import { unique } from "next/dist/build/utils";

const Product = new Schema({
    name: {type: String, require: true},
    slug: {type: String, require: true, unique: true},
    
})