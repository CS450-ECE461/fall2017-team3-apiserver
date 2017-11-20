var blueprint          = require ('@onehilltech/blueprint')
  , mongodb            = require ('@onehilltech/blueprint-mongodb')
  , ResourceController = mongodb.ResourceController
  , User               = require ('../models/User')
  ;
    
function UserController () {
  ResourceController.call (this, {model: User});
}

blueprint.controller (UserController, ResourceController)