const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 32,
        text: true
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true,
        index: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 2000,
        text: true //solo cadena de texto.
    },
    price: {
        type: Number,
        required: true,
        trim: true,
        maxlength: 32
    },
    category: {
        type: ObjectId,
        ref: "Category"
    },
    subs: [
        {
            type: ObjectId,
            ref: "Sub"
        }
    ],
    quantity: Number,
    sold: {
        type: Number,
        default: 0
    },
    images: {
        type: [],
    },
    shipping: {
        type: String,
        enum: ["Yes", "No"]
    },
    color: {
        type: String,
        enum: ["Black", "White", "Blue", "Silver", "Brown"]
    },
    brand: {
        type: String,
        enum: ["Apple", "Microsoft", "Sansung", "Lenovo", "ASUS"]
    },
    rating: {
        star: Number,
        postedBy: { type: ObjectId, ref: "User"}
    },
    status: {
        type: String,
        default: "Active",
        enum: ["Active", "Inactive"]
    }
});



module.exports = mongoose.model("Product", productSchema);