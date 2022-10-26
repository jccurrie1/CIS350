const mongoose = require("mongoose");

const IngredientsSchema = new mongoose.Schema({
    ingredient: {
        type: String,
        required: true,
    },
    shelfLife: {
        type: String,
        required: true,
    }
});

const IngredientsModel = mongoose.model("ingredients", IngredientsSchema);
module.exports = IngredientsModel;
