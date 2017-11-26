// app/models/User.js

var mongodb = require ('@onehilltech/blueprint-mongodb')
  ;

// use mongodb.Types to access mongoose.Types

var schema = mongodb.Schema ({
  name: {type: String, required: true, trim: true},
  rating: {type: Array, required: true, trim: true},
  skills: {type: Array, required: true, trim: true},
  email: {type: String, required: true, trim: true},
  phone: {type: String, required: true, trim: true},
  description: {type: String, required: true, trim: true},
  image: {type: String, required: true, trim: true},
  projects: {type: String, required: true, trim: true}
});

module.exports = mongodb.model ('user', schema, 'blueprint_user');