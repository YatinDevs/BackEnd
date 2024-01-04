const mongoose = require("mongoose");
const { Schema } = mongoose;
// Schema - (consider it as configuration for collection)
// The Permitted SchemaTypes are :
/*
  - String
  - Number
  - Date
  - Buffer 
  - Boolean
  - Mixed
  - ObjectId
  - Array
  - Decimal128
  - Map
*/
const productSchema = new Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String },
  price: {
    type: Number,
    min: [0, "wrong price"],
    required: true,
  },
  discountPercentage: {
    type: Number,
    min: [0, "wrong min discount"],
    max: [20, "wrong max discount"],
  },
  rating: {
    type: Number,
    min: [0, "wrong rating"],
    max: [5, "wrong rating"],
    default: 0,
  },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String, required: true },
  images: [String],
});

// we create Schema and convert it to Model.
// A instance of model is called Document
exports.Product = mongoose.model("Product", productSchema);
// 6:40 timestamp

// nginx -> Db-> caching -->server APi -- > redux--> React
