let mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;

class Database {
  constructor() {
    this._connect();
    //this._mongoConnect();
  }
_connect() {
     mongoose.connect(`mongodb://13.232.192.172:27017/instagram`)
        .then(() => {
            console.log('Database from exambazaar second server connection successful');
        })
        .catch(err => {
            console.error('Database exambazaar second server connection error');
       })
  }
  
  /*_mongoConnect(){
    MongoClient.connect(`mongodb://${authenticServer}/${database}`, function(err, client){
        if(err) { console.log("database connection error"); return console.dir(err); }
        var db = client.db('exambazaar');
        console.log("database connection successful");
        
        exports.db = db;
    })
  }*/
}

/*MongoClient.connect(`mongodb://${authenticServer}/${database}`, function(err, client) {
  if(err) { return console.dir(err); }
    var db = client.db('exambazaar');
    db.collection('overnightgrankaggregation').findOne({}, function (findErr, result) {
    if (findErr) throw findErr;
    console.log(result.name);
    client.close();
  });
    
    
  var collection = db.collection('overnightgrankaggregation',function(err,collection){
      collection.find({},{}).toArray(function(err, data) {
        console.log(data);
    }); 
  });   */
//});

module.exports = new Database()