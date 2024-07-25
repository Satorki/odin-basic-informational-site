const express = require("express");
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const aboutRoute = require("./routes/about");
app.use("/about", aboutRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "views", "index.html"));
// });

// app.get("/index", (req, res) => {
//   res.sendFile(path.join(__dirname, "views", "index.html"));
// });

// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "views", "about.html"));
// });

// app.get("/contact-me", (req, res) => {
//   res.sendFile(path.join(__dirname, "views", "contact-me.html"));
// });

// app.use((req, res, next) => {
//   res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
// });

