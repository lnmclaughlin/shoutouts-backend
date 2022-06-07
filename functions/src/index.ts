// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import shoutOutRouter from "./routes/shoutOutRouter";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/shoutouts", shoutOutRouter);
export const api = functions.https.onRequest(app);
