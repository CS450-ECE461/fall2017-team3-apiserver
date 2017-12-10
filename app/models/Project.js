// app/models/Project.js

var mongodb = require ('@onehilltech/blueprint-mongodb')
  ;

// use mongodb.Types to access mongoose.Types

var schema = new mongodb.Schema ({
  name: {type: String, required: true},
  description: {type: String, required: true, trim: true},
  skills: {type: [String], required: true, trim: true},
  owner: {type: String, required: true, trim: true},
  status: {type: Boolean, required: true, trim: true},
  collaborators: {type: [String], required: true, trim: true},
  image: {type: String, required: true}
});

module.exports = mongodb.resource ('project', schema, 'blueprint_project');