var express = require('express');
var moment = require('moment');
var router = express.Router();
var hashtag = require('./models/hashtag');
var ObjectId = require('mongodb').ObjectID;

router.post('/save', function(req, res){
    var reqForm = req.body;
    console.log(reqForm);
    var newTags = new hashtag(reqForm);
    newTags.save(function (err) {
      if (err) {
          console.log("Error: " + err);
          res.json([]);
      }
      else{
          res.json(newTags);
      }
    });
})

router.get('/fetchAll', function(req, res){
    var allHashTags = hashtag.find({}, {}).exec(function(error, allHashTags){
        if(!error && allHashTags){
            res.json(allHashTags);
        }else{
            console.log("Error: " + error);
            res.json([]);
        }
    })
})

module.exports = router;