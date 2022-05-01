// src/functions/sendmail.js
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
exports.handler =  async (event, context, callback) => {

  const mail_to_send = {
    to: "alecruzdev@gmail.com",
    from: 'contacto.cross.agency@gmail.com',
    subject: 'TEST01',
    html: "PRUEBA",
  };
  try{
    await sgMail.send(mail_to_send)
    return {
      statusCode: 200,
      body: "Message sent successfully"
    }
  } catch(e){
    return {
      statusCode: e.code,
      body: e.message
    }
  }
};
