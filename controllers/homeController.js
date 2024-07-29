const asyncHandler = require("express-async-handler");

const homeSite = {
  get: (req, res) => {
    res.render("index", {sitename: "Home"});
  },
};

module.exports = homeSite;
