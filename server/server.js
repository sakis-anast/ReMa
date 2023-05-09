const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.port;
const connection = require("./modules/connection");
const userRoute = require("./routes/userRoute");
const surveyRoute = require("./routes/surveyRoute");
const bodyParser = require("body-parser");
const cors = require("cors");


app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyParser.json());

app.use("/user", userRoute);
app.use("/survey", surveyRoute);

app.listen(port, () => {
  console.log(`server is connected on port : ${port} `);
});
