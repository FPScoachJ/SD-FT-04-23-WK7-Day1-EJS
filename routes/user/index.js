const express = require("express");
const router = express.Router();
const ejs = require("ejs");

router.get("/", (req, res) => {
  res.render("./user/user.ejs", { user: { name: "Dustin" } });
});
router.get("/user_info", (req, res) => {
  res.render("./user/userInfo.ejs");
});
router.get("/user_about", (req, res) => {
  res.render("./user/userAbout.ejs");
});
router.get("/display_all_users", (req, res) => {
  const userData = [
    {
      name: "Joe",
      address: "123 main st",
      city: "Tomball",
      zipcode: 77733,
    },
    {
      name: "Cameron",
      address: "123 main st",
      city: "Atlanta",
      zipcode: 25232,
    },
    {
      name: "Matt",
      address: "123 main st",
      city: "Houston",
      zipcode: 72733,
    },
  ];
  res.render("./user/displayAll.ejs", {userData: userData});
});

router.get("./dashboard/display_all_employees", (req, res) => {
  res.render("./user/dashboard.ejs");
});
module.exports = router;
