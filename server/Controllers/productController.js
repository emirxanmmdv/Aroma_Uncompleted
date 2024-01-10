import { Imtahan } from "../Models/productSchema.js";

export const getAllProducts = async (req, res) => {
  const data = await Imtahan.find({});
  res.send(data);
};

export const PostProducts = async (req, res) => {
  try {
    const newProduct = new Imtahan({ ...req.body });
    await newProduct.save();
    res.status(200).json("product added successfully!");
  } catch (error) {
    res.status(500).json("couldn't add product!");
  }
};

export const DeleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        const deleteProduct = await Imtahan.findByIdAndDelete(id);
        res.status(200).json("product deleted successfully!");
        
    } catch (error) {
        res.status(500).json("couldn't delete product!");
        
    }
};
