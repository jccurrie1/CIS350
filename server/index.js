const express = require("express")
const app = express()
const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://jccurrie:Wizzards11@cis350.ybbyvay.mongodb.net/?retryWrites=true&w=majority");
app.listen(3001, () => {
    console.log("server is running...");
});

// const IngredientsModel = require('./models/CIS350')
// app.get("/getCIS350", (req, res) => {
//     IngredientsModel.find( {}, (err, result) => {
//     if(err) 
//     {
//         console.log("Something bad has happened: " + err);
//     } else 
//     {
//         console.log("Yay found some result!!");
//         res.json(result);
//     }
//     });
//     });
    

//mongodb+srv://jccurrie:Wizzards11@cis350.ybbyvay.mongodb.net/?retryWrites=true&w=majority