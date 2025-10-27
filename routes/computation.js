var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  const allowed = {
    cos: Math.cos,
    asin: Math.asin,
    asinh: Math.asinh,
  };
  const fnKey = (req.query.fn || 'cos').toLowerCase();
  const fn = allowed[fnKey] || allowed.cos;

  let x;
  if (req.query.x !== undefined) {
    x = Number(req.query.x);
  } else {
    if (fn === Math.asin) {
      x = (Math.random() * 2) - 1; 
    } else {
      x = Math.random() * 10;     
    }
  }

  const y = fn(x);

  res.send(`${fnKey} applied to ${x} is ${y}`);
});

module.exports = router;
