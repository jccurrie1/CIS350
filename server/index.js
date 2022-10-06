const express = require("express")
const app = express()
const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://jccurrie:Wizzards11@cis350.ybbyvay.mongodb.net/?retryWrites=true&w=majority");
app.listen(3001, () => {
    console.log("server is running.....");
});

//mongodb+srv://jccurrie:Wizzards11@cis350.ybbyvay.mongodb.net/?retryWrites=true&w=majority