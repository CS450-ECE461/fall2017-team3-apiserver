// app/models/Message.js

var mongodb = require ('@onehilltech/blueprint-mongodb')
  ;

// use mongodb.Types to access mongoose.Types

var schema = new mongodb.Schema ({
  sender: {type: String, required: true},//senders user ID 
  receiver: {type: String, required: true},//receivers user ID
  body: {type: String, required: true}
});

module.exports = mongodb.resource ('message', schema, 'blueprint_message');