const asyncHandler = require("express-async-handler");

const homeSite = {
  get: (req, res) => {
    res.render("index");
  },
};

module.exports = homeSite;
