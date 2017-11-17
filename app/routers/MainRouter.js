var blueprint  = require ('@onehilltech/blueprint');

module.exports = exports = {

  '/gatekeeper': blueprint ('router://@onehilltech/blueprint-gatekeeper:v1'),

  '/v1': {
    policy: 'gatekeeper.auth.bearer'
  }
};
