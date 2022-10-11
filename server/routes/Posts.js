const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json("Hallo Dunia");
});

module.exports = router;
