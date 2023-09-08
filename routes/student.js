var express = require("express");
var router = express.Router();

router.get("/get", (req, res, next) => {
  const n = req.query.name;
  const l = req.query.loc;
  res.send(`My name is ${n}, am from ${l}`);
});
router.post("/my-post", (req, res, next) => {
  const n = req.body.name;
  const l = req.body.loc;
  res.send(`My name is ${n}, am from ${l}`);
});
router.put("/my-put/:n/:l", (req, res, next) => {
  const n = req.params.n;
  const l = req.params.l;
  res.send(`My name is ${n}, am from ${l}`);
});
router.delete("/my-del", (req, res, next) => {
  const n = req.headers.name;
  const l = req.headers.loc;
  res.send(`My name is ${n}, am from ${l}`);
});
module.exports = router;
