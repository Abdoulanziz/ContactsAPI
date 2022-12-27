const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const contactRouter = require("../routes/contactRoutes");

dotenv.config();
const app = express();

const { PORT, DB_URI } = process.env;
const port = PORT || 5000;
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${port}`);
  });
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", contactRouter);
