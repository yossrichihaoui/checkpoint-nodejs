const email=require("nodemailer");
var transporter = email.createTransport({
    service: 'gmail',
    auth: {
      user: 'yossrichihaoui@gmail.com',
      pass: 'jwrm iwzm ksks hbpe'
    }
  });
  
  var mailOptions = {
    from: 'yossrichihaoui@gmail.com',
    to: 'dhia.sehli22@gmail.com',
    cc:'raiswajd9@gmail.com',
    subject: 'hello',
    text: 'wink ya dhia '
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  }); 