const nodemailer = require ("nodemailer");

const sendmail = (mailop) => {

var transporter = nodemailer.createTransport({

    host: "smtp-mail.outlook.com", // hostname
    port: 587, // port for secure SMTP
    secureConnection: false,
    tls: {
       ciphers:'SSLv3'
    },
    auth: {
        user: 'kustomssports@hotmail.com',
        pass: 'Nightchanges'
    }
});


transporter.sendMail(mailop, (error, info) =>{
    if(error){
        res.status(400).send(error.message);
    }else {
        console.log("Enviao")
        res.status(200).jsonp(req.body);
    }
})

}

export default sendmail;