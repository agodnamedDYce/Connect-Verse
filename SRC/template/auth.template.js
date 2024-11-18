import { mailTransport } from "../config/mailer.js"
import { mailGenerator } from "../config/mailgen.js"

export const registrationMail = async (email, username) => {
    const supportTeam = 'dyceiskheeng@gmail.com'
    const html = {
        body: {
            signature: 'false',
            greeting: `Dear ${username}`,
            intro: `Welcome to our app we hope you enjoy it`,
            outro : [
                `if you did not signup please contact our support team ${supportTeam} for verification`
            ]
        }
    }
}

const template = mailGenerator.generate(html)
const mail = {
    to: email,
    from: 'nwahayusuf@gmail.com',
    subject: 'successful registration',
    html: template

}

