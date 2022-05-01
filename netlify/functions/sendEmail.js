// src/functions/sendmail.js
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
exports.handler =  async (event, context, callback) => {
  console.log(event)
  const data = JSON.parse(event.body)
  const { subject } = data;
  const body = Object.keys(data).map((k) => {
    return `${k}: ${data[k]}`
  }).join("<br><br>");

  const mail_to_send = {
    to: ["comercial@saentech.es","canarygo1@gmail.com"],
    from: 'contacto.cross.agency@gmail.com',
    subject: subject,
    html: body,
  };
  try{
    await sgMail.send(mail_to_send)
    return {
      statusCode: 200,
      body: "Message sent successfully"
    }
  } catch(e){
    console.log(e);
    return {
      statusCode: e.code,
      body: e.message
    }
  }
};
