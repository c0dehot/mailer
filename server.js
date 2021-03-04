const nodemailer = require( 'nodemailer' )

//1. on the contact you send a POST request with teh data
// ex. fetchJSON( '/api/sendmail', { subject: "", email: "", text: """ })

//2. on the SERVER you end a POST endpoint:
// app.post( '/api/sendmail', function( req, res ){
    // const mail = req.body
    // mailOptions.from = mail.email
    // mailOptions.subject = mail.subject
    // mailOptions.text = mail.text

    // const result = await transporter.sendMail(mailOptions)
//})

async function main(){

    const transporter = nodemailer.createTransport({
            service : "hotmail",
            auth : {
                        user : "myname@hotmail.com",// your actual email
                        pass : ""        // your actual password
            }
    })

    const mailOptions={
        from:"fil.laborde@gmail.com",
        to : "fil.laborde@gmail.com",
        subject : "email without attachment" ,
        text : "This is the body part"
    }

    const result = await transporter.sendMail(mailOptions)
}
main()
