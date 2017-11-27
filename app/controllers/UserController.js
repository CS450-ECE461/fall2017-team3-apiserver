var blueprint          = require ('@onehilltech/blueprint')
  , mongodb            = require ('@onehilltech/blueprint-mongodb')
  , UserResourceController = mongodb.UserResourceController
  , Users               = require ('../models/User')
  , util            = require ('util')
  , objectPath      = require ('object-path')
  ;


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

UserController.prototype.getAll = function (opts) {
  return UserResourceController.getAll()
};

UserController.prototype.create = function (opts) {
  return UserResourceController.create()
};

module.exports = exports = UserController;