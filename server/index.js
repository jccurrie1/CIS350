const express = require("express");
const app = express()
const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://jccurrie:Wizzards11@cis350.ybbyvay.mongodb.net/CIS350?retryWrites=true&w=majority");
app.listen(3001, () => {
    console.log("server is running...");
});

//this is the problem
const IngredientsModel = require('./models/Ingredients')
app.get("/getIngredients", (req, res) => {
    IngredientsModel.find({}, (err, result) => {
        if (err) {
            console.log("Something bad has happened: " + err);
        } else {
            console.log("Yay found some result!!");
            res.json(result);
        }
    });
});


//mongodb+srv://jccurrie:Wizzards11@cis350.ybbyvay.mongodb.net/?retryWrites=true&w=majority