var express = require('express');
var router = express.Router();
const fs = require("fs");

/* GET home page. */

router.get('/createfile', function (req, res) {
  fs.writeFile(`./uploads/${req.query.fileform}`, "", function (err) {
    if (err) res.send(err);
    else res.redirect("back")
  })
});

router.get('/createfolder', function (req, res) {
  fs.mkdir(`./uploads/${req.query.folderform}`, function (err) {
    if (err) return err;
    else res.redirect("back");
  })
});


module.exports = router;
