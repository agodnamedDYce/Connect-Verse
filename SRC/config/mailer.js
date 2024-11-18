import dotenv from 'dotenv'
dotenv.config()

import { google } from 'googleapis'
import { createTransport } from 'nodemailer'
const OAuth2 = google.auth.OAuth2

const {CLIENT_ID, ACCESS_TOKEN, CLIENT_SECRET , REDIRECT_URL, GMAIL_NAME, REFRESH_TOKEN} = process.env



oauth2Client setCredentials({refresh_token : REFRESH_TOKEN})

const smtpTransport = createTransport ({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: ACCESS_TOKEN,
    }