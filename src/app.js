const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const contactRouter = require("../routes/contactRoutes");

dotenv.config();
const app = express();

const { NODE_ENV, PORT, DB_URI_LOCAL, DB_URI_REMOTE } = process.env;

const port = PORT || 5000;
const dbURI = NODE_ENV === "development" ? DB_URI_LOCAL : DB_URI_REMOTE;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", contactRouter);

// Categorize the numbers by ISPs
