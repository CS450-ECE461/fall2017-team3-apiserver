var blueprint          = require ('@onehilltech/blueprint')
  , mongodb            = require ('@onehilltech/blueprint-mongodb')
  , ResourceController = mongodb.UserResourceController
  , Users               = require ('../models/User')
  , util            = require ('util')
  , objectPath      = require ('object-path')
  ;


function UserController () {
  blueprint.BaseController.call (this);
}

blueprint.controller (UserController)

function __prepareDocument (req, doc, callback) { return callback (null, doc); }
function __prepareFilter (req, filter, callback) { return callback (null, filter); }

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
  let on = opts.on || {};
  let prepareFilter = on.prepareFilter || __prepareFilter;
  let controller = this;

  on.prepareFilter = function (req, filter, callback) {
    if (!controller.allowAllAccess) {
      // The user resource can only be access by the person that created it. Let's
      // update the filter to prevent users who do not own the resource from access
      // the resource.
      let userId = objectPath.get (req, controller.userPath);

      if (controller.userPathIsModel) {
        userId = userId[controller.modelIdPath];
      }

      filter.$or = [
        {user: {$exists: false}}
      ];

      if (!filter._public) {
        filter.$or.push ({user: {$eq: userId}});
      }
      else {
        delete filter._public;
      }
    }

    // Pass control to the subclass.
    return prepareFilter (req, filter, callback);
  };

  opts.on = on;

  return ResourceController.prototype.getAll.call (this, opts);
};

UserController.prototype.create = function (opts) {
  let on = opts.on || {};
  let prepareDocument = on.prepareDocument || __prepareDocument;
  let controller = this;

  on.prepareDocument = function (req, doc, callback) {
    // Get the user id from the request, and set the user id on the model path.
    let user = objectPath.get (req, controller.userPath);
    objectPath.set (doc, controller.modelPath, user);

    // Pass control to the subclass.
    return prepareDocument (req, doc, callback);
  };

  opts.on = on;

  return ResourceController.prototype.create.call (this, opts);
};

module.exports = exports = UserController;