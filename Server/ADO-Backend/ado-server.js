var express =       require('express');
var parser =        require('body-parser');
const nodemailer =  require('nodemailer');
var cors =          require('cors');
var multer =        require('multer');
var upload =        multer({ dest: "uploads/"});

var app = express();

app.use(cors());
app.use(parser.json());

var hostname = '0.0.0.0';
const port = 8080;

app.post('/ado-gradForm/sendEmail', upload.single("file"), function(req, res){
    res.send("Trying to send Email with Attachment: " + req.file.path);
    console.log(req.body);
    
    sendEmail(req.file, 
              req.body.username, 
              req.body.surname, 
              req.body.email, 
              req.body.cellnumber, 
              req.body.form);
})

var sendEmail = function(filePath, username, surname, email, cellnumber, form){
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'adoEmail@gmail.com',
          pass: "adoPassword"
      }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: '"ADO Team 👻" <adoEmail@gmail.com>', 
      to: 'adoEmail@gmail.com',
      subject: form + username + surname, 
      text: "This is a new Applicant!",
      attachments: [{ 
          content: filePath,
          filename: filePath.originalname
      }],
      html: '<p> Im Applying at ADO For the Graduate Program!</p>' + <br></br> +
            <label> Username: </label>  + {username} +  <br></br> +
            <label> Surname: </label>  + {surname} +  <br></br> +
            <label> Email: </label>  + {email} +  <br></br> + 
            <label> CellNumber: </label>  + {cellnumber}
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

console.log('Listening at http://localhost:' + port)
