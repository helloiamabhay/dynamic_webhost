const mongoose=require("mongoose");
const DB ='mongodb+srv://abhayv92004:GeClqDbP9AAiF8Hm@cluster0.urspl4b.mongodb.net/mernstack?retryWrites=true&w=majority'

//creating db

// mongoose.connect('mongodb://127.0.0.1:27017/dynamicweb').then(() => {
mongoose.connect(DB).then(() => {
  console.log("db connected");
}).catch((err) => {
  console.log(err)
});



    
