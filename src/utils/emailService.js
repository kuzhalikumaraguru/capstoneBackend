import nodemailer from 'nodemailer';
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'kuzhali.kumaraguru@gmail.com', // Your SendGrid username
        pass: 'sutisvscwokaohgi' // Your SendGrid password
    }
});

const sendEmail = async (to, sub, html) => {
    const msg = {
        to: to,
        from: 'trioengineers@gmail.com',
        subject: sub,
        text: html,
        html: html
    }
    transporter.sendMail(msg).then(() => {
        console.log('Email sent');
    })
    .catch((error) => {
        throw error
    })
}

const passwordResetMail = async (to, name, token) => {
        try {
            let html = `<div>
            <h3>Welcome ${name}, Trio Engineer's Client</h3>
            <p>We have recevied your password reset request.
                Please find the link to reset the password <a href='${process.env.web_url}/user/forgetPassword/${token}'>Click Here</a>
            </p>
            </div>
            <div>
            Thanks, <br>
            Trio Engineers Team
            </div>`
            await sendEmail(to,'Password Reset Link', html)
        } catch (error) {
            throw error
        }
    }

export default {
    passwordResetMail
}