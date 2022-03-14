const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true, //espacio.
      required: "Name is required",
      minlength: [2, "Too short"],
      maxlength: [32, "Too long"],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    status: {
      //soft-delete
      type: String,
      default: "Active",
      enum: ["Active", "Inactive"], //alternativas de valor.
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
