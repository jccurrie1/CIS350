const express = require("express");
const app = express()
app.use(express.json());
const mongoose = require("mongoose");
const cors = require("cors")
app.use(express.json());
app.use(cors());



mongoose.connect("mongodb+srv://jccurrie:Wizzards11@cis350.ybbyvay.mongodb.net/CIS350?retryWrites=true&w=majority");
app.listen(3001, () => {
    console.log("server is running...");
});

const IngredientsModel = require('./models/Ingredients')
// app.get can be anything i want it to be as long as i use it in the browser
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

app.post("/createIngredients", async (req, res) => {
    const Ingredients = req.body;
    const newIngredients = new IngredientsModel(Ingredients);
    await newIngredients.save();
    res.json(Ingredients);
});





//mongodb+srv://jccurrie:Wizzards11@cis350.ybbyvay.mongodb.net/?retryWrites=true&w=majority