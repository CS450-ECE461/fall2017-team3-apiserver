var blueprint  = require ('@onehilltech/blueprint');
var cors = require ('cors');

module.exports = exports = {
  '/':cors (),

  '/gatekeeper': blueprint ('router://@onehilltech/blueprint-gatekeeper:v1'),

  '/v1': {
    policy: 'gatekeeper.auth.bearer'
  }
};
