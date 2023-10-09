const mongoose = require("mongoose");

const shoeSchema = mongoose.Schema({
    name: { type: String, required: true },
    varients: [],
    prices: [],
    category: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true }
}, {
    timestamps: true
});

const shoeModel = mongoose.model("shoe", shoeSchema); // Use "shoe" as the model name

module.exports = shoeModel;