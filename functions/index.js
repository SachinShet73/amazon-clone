const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")('sk_test_51JOjzLSGxTQrEUyuVc3PnR5HQHUfyx9rp8X8F2TuFwqBokYGsHUqTTMloPoQph26HyFuhv5I7JpMRcQ9IsyrG7C400I9QRoDi1')

//api
//app config

const app = express();

//middlewares
app.use(cors({ origin: true }))
app.use(express.json())

//API routes
app.get('/', (request, response) => response.status(200).send('HELLO WORLD'))


app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received for this amount >>> ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of currency
        currency: "Rs",
    });
    //ok created
    response.status(201).send({
    clientSecret: paymentIntent.client_secret,
    });
});

//-Listen Command

exports.api = functions.https.onRequest(app)

//api http://localhost:5001/clone-fbbc0/us-central1/api
// Example endpoint