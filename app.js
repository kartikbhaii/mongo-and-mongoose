// step 1: mongoose.connect with database
// step 2: create schema
// step 3: create model/collection
// step 4: insert document
// step 5: use <collection>.save()


const mongoose = require('mongoose')

// step1: connecting with db
mongoose.connect("mongodb://localhost:27017/fruitsDB")


// step2: creating schema
const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
})

// step3: creating model/collection
const Fruit = mongoose.model("Fruit", fruitSchema)

// step4: insert document
const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Preety solid as a fruit"
})

// fruit.save()