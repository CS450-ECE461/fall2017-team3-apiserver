var blueprint          = require ('@onehilltech/blueprint')
  , mongodb            = require ('@onehilltech/blueprint-mongodb')
  , ResourceController = mongodb.ResourceController
  , Users               = require ('../models/User')
  , util      			= require ('util')
  , objectPath 			= require ('object-path')
  ;
function __prepareDocument (req, doc, callback) { return callback (null, doc); }
function __prepareFilter (req, filter, callback) { return callback (null, filter); }

function UserController () {
  blueprint.BaseController.call (this);
}

blueprint.controller (UserController)

UserController.prototype.getUser = function (opts) {
  controller = this;
  
  var self = this;

  return function (req, res) {
  	let userId = objectPath.get (req, controller.userPath);

  	userName = userId.params.userID;
  	console.log('Error:', userId);
    return res.render ('User.pug', {user: userName});
  };
};

module.exports = exports = UserController;