'use strict';

const mongodb = require ('@onehilltech/blueprint-mongodb')
  ;

var schema = new mongodb.Schema({
  name: {type: String, required: true, trim: true},
  rating: {type: Array, required: true, trim: true},
  skills: {type: Array, required: true, trim: true},
  email: {type: String, required: true, trim: true},
  phone: {type: String, required: true, trim: true},
  description: {type: String, required: true, trim: true},
  image: {type: String, required: true, trim: true},
  projects: {type: String, required: true, trim: true}
});

const COLLECTION_NAME = 'users';
const MODEL_NAME = 'user';

module.exports = mongodb.resource (MODEL_NAME, schema, COLLECTION_NAME);
