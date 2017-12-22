var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', (req, res, next) => {
  if(req.body.func == "add"){
    var c = parseInt(req.body.a) + parseInt(req.body.b);
  }
  res.json({"result": c});
});

module.exports = router;
