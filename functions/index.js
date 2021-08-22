const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")
('sk_test_51JOjzLSGxTQrEUyuVc3PnR5HQHUfyx9rp8X8F2TuFwqBokYGsHUqTTMloPoQph26HyFuhv5I7JpMRcQ9IsyrG7C400I9QRoDi1')

//api
//app config

const app = express();

//middlewares
app.use(cors({origin: true}))
app.use(express.json())

//API routes
app.get('/',(request , response) => response.status(200).send('HELLO WORLD'))
//-Listen Command

exports.api = functions.https.onRequest(app)