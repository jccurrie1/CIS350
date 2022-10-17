const mongoose = require("mongoose");

const IngredientsSchema = new mongoose.Schema({
    ingredient: {
        type: String,
        required: true,
    },
    shelfLife: {
        type: Number,
        required: true,
    }
});

const IngredientsModel = mongoose.model("ingredients", IngredientsSchema);
module.exports = IngredientsModel;


