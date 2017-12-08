// app/models/User.js

var mongodb = require ('@onehilltech/blueprint-mongodb')
  ;

// use mongodb.Types to access mongoose.Types

var schema = new mongodb.Schema ({
  name: {type: String, required: true},
  rating: {type: Array, trim: true},
  skills: {type: Array, trim: true},
  email: {type: String, trim: true},
  password: {type: String, trim: true},
  description: {type: String, trim: true},
  portfolio: {type: String, trim: true},
  image: {type: String, trim: true},
  projects: {type: String, trim: true}
});

module.exports = mongodb.resource ('user', schema, 'blueprint_user');