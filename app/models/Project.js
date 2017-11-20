// app/models/Project.js

var mongodb = require ('@onehilltech/blueprint-mongodb')
  ;

// use mongodb.Types to access mongoose.Types

var schema = mongodb.Schema ({
  name: {type: String, required: true, trim: true},
  description: {type: String, required: true, trim: true},
  skills: {type: Array, required: true, trim: true},
  owner: {type: String, required: true, trim: true},
  status: {type: Boolean, required: true, trim: true},
  collaborators: {type: Array, required: true, trim: true},
  image: {type: String, required: true, trim: true}
});

module.exports = mongodb.model ('project', schema, 'blueprint_project');