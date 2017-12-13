var blueprint          = require ('@onehilltech/blueprint')
  , mongodb            = require ('@onehilltech/blueprint-mongodb')
  , ResourceController =  mongodb.ResourceController
  , Project               = require ('../models/Project')
  ;
    
function ProjectController () {
  ResourceController.call (this, {model: Project});
}

blueprint.controller (ProjectController, ResourceController);

module.exports = ProjectController;