const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

sgMail.send({
  to:"ppicturesqueedits@gmail.com",
  from:"ppicturesqueedits@gmail.com",
  subject:"The first mail from us",
  text:"hope this one get to you"
})

