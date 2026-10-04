import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100
    },

    description: {
        type: String,
        required: true,
        minLength: 10
    },

    image: {
        type: String,
        required: true
    }
});

const productModel = mongoose.model("products",productSchema)

export default productModel; 