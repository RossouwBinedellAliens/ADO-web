var express =       require('express');
var parser =        require('body-parser');
const nodemailer =  require('nodemailer');
var cors =          require('cors');
var multer =        require('multer');
var upload =        multer({ dest: "uploads/"});

var config =        require("../../config.json");

var app = express();

app.use(cors());
app.use(parser.json());

var hostname = config.address;
const port = config.port;

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: config.hostEmail,
        pass: config.hostEmailPassword
    }
});

app.post('/ado-gradForm/sendEmail', upload.single("file"), function(req, res){
    console.log(req.body);
    res.statusCode = 200;
    res.statusMessage="success";
    res.send(true);
    
    sendEmailGraduate(req.file, 
                      req.body.username, 
                      req.body.surname, 
                      req.body.email, 
                      req.body.cellnumber, 
                      req.body.form,
                      req.body.informAgain);
})

var sendEmailGraduate = function(filePath, username, surname, email, cellnumber, form, informAgain){
  
  let mailOptions = {
      from: '"ADO " <' + config.hostEmail + '>', // the transporter email address. i.e. Email which will send the form from website
      to: config.recieverEmail, // replace with proper email. i.e. Email which will receive emails from the website
      subject: form + username + "  " + surname, 
      attachments: [{ 
          content: filePath,
          filename: filePath.originalname
      }],
      text: "Name: " + username + "\n" + 
            "Surname: " + surname + '\n' +
            "Cellnumber: " + cellnumber + '\n' +
            "Email: " + email + '\n' +
            "Inform Again: " + informAgain + '\n'
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
  });
}

app.post('/ado-vacationForm/sendEmail', function(req, res){
   console.log(req.body);
    res.statusCode = 200;
    res.statusMessage="success";
    res.send(true);
    
    sendEmailVacation(req.body.textBlock, 
                      req.body.username, 
                      req.body.surname, 
                      req.body.email, 
                      req.body.cellnumber, 
                      req.body.form,
                      req.body.informAgain);
})

var sendEmailVacation = function(textBlock, username, surname, email, cellnumber, form, informAgain){

  let mailOptions = {
        from: '"ADO " <' + config.hostEmail + '>', // the transporter email address. i.e. Email which will send the form from website
        to: config.recieverEmail, // replace with proper email. i.e. Email which will receive emails from the website
        subject: form + username + "  " + surname, 
        text: "Name: " + username + "\n" + 
              "Surname: " + surname + '\n' +
              "Cellnumber: " + cellnumber + '\n' +
              "Email: " + email + '\n' +
              "Inform Again: " + informAgain + '\n' + 
              "Additional Text: " + textBlock + '\n'
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
  });
}


app.listen(port, hostname);

console.log('Listening at http://' + hostname + ":" + port)
