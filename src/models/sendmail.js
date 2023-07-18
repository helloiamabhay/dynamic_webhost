var nodemailer = require('nodemailer');

const sendMail=async(req,res)=>{
    let testAccount = await nodemailer.createTestAccount();

var transporter =await nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: 'abhayv92004@gmail.com',
    pass: 'aznrqaelscreorni'
  }
});

var mailOptions = {
  from: 'abhayv92004@gmail.com',
  to: 'vishwakarmaabhay283@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
  // res.json(info)
 // alert("submited")
})

}

module.exports=sendMail;

