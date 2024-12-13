const mongoose=require("mongoose");
const DB ='risky db connection'

//creating db

// mongoose.connect('mongodb://127.0.0.1:27017/dynamicweb').then(() => {
mongoose.connect(DB).then(() => {
  console.log("db connected");
}).catch((err) => {
  console.log(err)
});



    
