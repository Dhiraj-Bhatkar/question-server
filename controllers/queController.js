var express = require("express");

var router = express.Router();
var queService = require("../services/queService");
router.post("/save", (req, res, next) => {
  console.log(1);
  const data = req.body.data;
  const result = queService.save(data);
  res.send(result);
});
module.exports = router;
