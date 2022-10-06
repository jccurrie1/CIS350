const mongoose = require("mongoose")

const IngredientsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    priority: {
        type: Number,
        required: true,
    }
});

const IngredientsModel = mongoose.model("CIS350", IngredientsSchema);
module.exports = IngredientsModel;


