import { renderTemplate, transporter } from '../middlewares/nodemailer.js';


// this is another way of exporting a method
const newPassword = (user)=> {
   return new Promise((resolve, reject)=>{
    let htmlString = renderTemplate({...user});

    transporter.sendMail({
       from: 'cnauthtests@gmaill',
       to: user.email,
       subject: "New Password!",
       html: htmlString
    }, (err, info) => {
        if (err){
            console.log('Error in sending mail', err);
            reject(err);
            return;
        }
        // console.log('Message sent', info);
        resolve(info);
        return;
    });
   })
}

export default newPassword 