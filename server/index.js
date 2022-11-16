const express = require("express");
const app = express()
app.use(express.json());
const mongoose = require("mongoose");
const cors = require("cors")
app.use(express.json())
app.use(cors());


mongoose.connect("mongodb+srv://jccurrie:Wizzards11@cis350.ybbyvay.mongodb.net/CIS350?retryWrites=true&w=majority");
app.listen(3001, () => {
    console.log("server is running...");
});


const User = require("./models/user.model");
const IngredientsModel = require('./models/Ingredients');
const { deleteOne } = require("./models/Ingredients");



// second database

app.post('/api/register', async (req, res)=>{
    console.log(req.body)
    // try {
		// const newPassword = await bcrypt.hash(req.body.password, 10)
		await User.create({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
		})
		res.json({ status: 'ok' })
	// } catch (err) {
	// 	res.json({ status: 'error', error: 'Duplicate email' })
	// }
})

app.post('/login', async (req, res) =>{
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password,
    })
    if (user){
        return res.json({status: 'ok', user: true })
    }else{
        return res.json({status: 'error', user: false })
    }
})


// end second database




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





//mongodb+srv://jccurrie:Wizzards11@cis350.ybbyvay.mongodb.net/?retryWrites=true&w=majority