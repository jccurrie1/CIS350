const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const cors = require("cors");
app.use(express.json());
app.use(cors());
const sendEmail = require("./utils/sendEmail");


mongoose.connect(
  "mongodb+srv://jccurrie:Wizzards11@cis350.ybbyvay.mongodb.net/CIS350?retryWrites=true&w=majority"
);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("server is running...");
});

const User = require("./models/user.model");
const IngredientsModel = require("./models/Ingredients");
const { deleteOne } = require("./models/Ingredients");
const { collection } = require("./models/user.model");

app.post("/api/register", async (req, res) => {
  console.log(req.body);
  try {
    const newPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate email" });
  }
});

app.post("/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (user) {
    return res.json({ status: "ok", user: true });
  } else {
    return res.json({ status: "error", user: false });
  }
});

app.get("/getIngredients", (req, res) => {
  IngredientsModel.find({}, (err, result) => {
    if (err) {
      console.log("Something bad has happened: " + err);
    } else {
      console.log("found some result!!");
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

app.delete("/deleteIngredients", async (req, res) => {
  const id = req.body;
  const deletedIngredient = await IngredientsModel.deleteOne(id);
  console.log(deletedIngredient);
  res.json(id);
});

// Send Mail
app.get("/sendEmail", (req, res) => {
    res.send("Welcome to my app!");
});

app.post("/api/sendEmail", async (req, res) => {
    
    const {email} = req.body;

    try {
        const send_to = email;
        const sent_from = process.env.EMAIL_USER;
        const reply_to = email;
        const subject = "Your food is expiring soon!";
        const message = '<h1>Hi there!</h1><p>Your food is expiring soon!</p>';

        await sendEmail(subject, message, send_to, sent_from, reply_to);
        res.status(200).json({success: true, message: "Email sent!"}); 
    } catch (err) {
        res.status(500).json({success: false, message: "Email not sent!"});
    }
});

//mongodb+srv://jccurrie:Wizzards11@cis350.ybbyvay.mongodb.net/?retryWrites=true&w=majority
