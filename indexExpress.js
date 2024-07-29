const express = require("express");
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const homeRoute = require("./routes/homeRouter");
const contactRoute = require("./routes/contactRouter");
const aboutRoute = require("./routes/aboutRouter");

app.use("/", homeRoute);
app.use("/about", aboutRoute);
app.use("/contact-me", contactRoute);

app.use((req, res, next) => {
  res.status(404).render("404", { url: req.originalUrl });
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render("500", { error: err });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});