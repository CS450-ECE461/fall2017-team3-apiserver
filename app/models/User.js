// app/models/User.js

var mongodb = require ('@onehilltech/blueprint-mongodb')
  ;

// use mongodb.Types to access mongoose.Types

var schema = new mongodb.Schema ({
  name: {type: String, required: true},
  rating: {type: [Number], required: true, trim: true},
  skills: {type: [String], required: true, trim: true},
  email: {type: String, required: true, trim: true},
  phone: {type: String, required: true, trim: true},
  description: {type: String, required: true, trim: true},
  portfolio: {type: String, required: true, trim: true},
  image: {type: String, required: true, trim: true},
  projects: {type: [String], required: true, trim: true}
});

module.exports = mongodb.resource ('user', schema, 'blueprint_user');