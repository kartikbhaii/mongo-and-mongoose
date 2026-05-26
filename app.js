// step 1: mongoose.connect with database
// step 2: create schema
// step 3: create model/collection
// step 4: insert document
// step 5: use <collection>.save()

const mongoose = require("mongoose");

// step1: connecting with db
mongoose.connect("mongodb://localhost:27017/fruitsDB");

// step2: creating schema
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

// step3: creating model/collection
const Fruit = mongoose.model("Fruit", fruitSchema);



// fruit.save(); //everytime nodemon runs then this line insert document again and again, so i just comment out this line.

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const melon = new Fruit({
    name: "Melon",
    rating: 10,
    review: "so watery..."
})

// melon.save()



const Person = mongoose.model("Person", personSchema);

// const person = new Person({
//   name: "Amy",
//   age: 22,
//   favouriteFruit: pineapple
// });

// person.save()

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 10,
  review: "Sooo sourrrr!!",
});
const orange = new Fruit({
  name: "Orange",
  rating: 10,
  review: "Best!!",
});
const mango = new Fruit({
  name: "Mango",
  rating: 10,
  review: "Best fruit ever!",
});

// Fruit.insertMany([kiwi, orange, mango])
// .then(()=>{
//     console.log("Successfully saved all fruits");
// })
// .catch((err)=>{
//     console.log(err);
// })

Fruit.find()
  .then((fruits) => {
    fruits.forEach((fruit) => {
      console.log(fruit.name);
    });
  })
  .catch((err) => {
    console.log(err);
  });
//   .finally(() => {
//     mongoose.connection.close();
// })

// Fruit.updateOne(
//     { _id: "6a146df2615901e0d671a3e5" },
//     {$set: { name: "Grapes" }}
// )
//   .then(() => {
//     console.log("Successfully updated the document");
//   })
//   .catch((err) => {
//     console.log(err);
//   });



// Fruit.deleteOne({ name: 'Pineapple' })
//     .then(()=>{
//         console.log("Successfully deleted")
//     })
//     .catch((err)=>{
//         console.log(err);
        
//     })



// Person.deleteMany({name: "John"})
// .then(()=>{
//     console.log("Deleted");
    
// })
// .catch((err)=>{
//     console.log(err);
    
// })




 Person.updateOne({name: "John"}, {favouriteFruit: melon})
 .then(()=>{

 })
 .catch((err)=>{
    console.log(err);
    
 })