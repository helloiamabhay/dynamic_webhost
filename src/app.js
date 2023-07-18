const exp = require("constants");
const express=require("express");
const path=require("path")
const app=express();
require("./db/conn")
const User=require("./models/userdata")
const hbs=require("hbs");
const sendMail = require("./models/sendmail");
const port=process.env.PORT || 3000;

// setting the path 
//console.log(path.join(__dirname,"../public"));
const staticpath=path.join(__dirname,"../public");
const templatepath=path.join(__dirname,"../template/views");
const partialpath=path.join(__dirname,"../template/partials");

// middleware
// const middleware=(req,res,next)=>{
//    sendMail();
//    next();
// }


app.use(express.urlencoded({extended:false}))
app.use(express.static(staticpath));


app.set("view engine","hbs");
app.set("views",templatepath);
hbs.registerPartials(partialpath)

// routings
app.get("/",(req,res)=>{
   // res.send("hii i am listening");
   res.render("index")
})

 app.post("/contact",async(req,res)=>{
    
try {
 //  res.send(req.body)

 const userData=new User(req.body)
 sendMail();
  await userData.save()
 res.status(201).render("index")
} catch (error) {
   res.status(500).send(error)
}
 })
//  app.get("/contact",sendMail)
// server create
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})