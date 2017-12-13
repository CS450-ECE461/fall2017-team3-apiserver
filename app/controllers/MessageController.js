var blueprint          = require ('@onehilltech/blueprint')
  , mongodb            = require ('@onehilltech/blueprint-mongodb')
  , ResourceController =  mongodb.ResourceController
  , Message               = require ('../models/Message')
  ;
    
function MessageController () {
  ResourceController.call (this, {model: Message});
}

blueprint.controller (MessageController, ResourceController);

module.exports = MessageController;