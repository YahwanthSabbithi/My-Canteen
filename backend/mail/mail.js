require('dotenv').config()
var nodemailer = require('nodemailer');
function sendEmail(to,otp) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'abhineatha14@gmail.com',
            pass: process.env.EMAILPASSWORD
        }
    });
    var cc = ["yahwanthsabbithi@gmail.com"]
    var str = "your otp = ";
    var a =otp;
    str+=a;
    str += "\notp valid till 2min"
    var mailOptions = {
      from: "abhineatha14@gmail.com",
      to: to,
      cc: cc,
      subject: "Reset Password FoodZone!!",
      text: str,
      html: require("./otpEmailView")({ otp: otp }),
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
module.exports = sendEmail