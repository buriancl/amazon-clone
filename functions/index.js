const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_07iGHdZjphVO2vpYv8wUNmgg00zfZ2gK1q");

// API

// App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received BOOM!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  //Ok - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen command
exports.api = functions.https.onRequest(app);

//Example Endpoint
//http://localhost:5001/clone-654cd/us-central1/api
