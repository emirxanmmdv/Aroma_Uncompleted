import mongoose from "mongoose"
const { Schema } = mongoose

const productsSchema = new Schema({
    image: String,
    category: String,
    name: String,
    price: Number
  });


export const Imtahan = mongoose.model('imtahan', productsSchema);