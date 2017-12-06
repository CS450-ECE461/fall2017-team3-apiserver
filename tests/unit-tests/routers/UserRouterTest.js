var blueprint = require ('@onehilltech/blueprint')
, expect    = require ('chai').expect
;

describe ('UserRouter', function () {
  describe ('/users', function () {
    context ('GET', function () {
      it ('should get all users in the database', function (done) {
        blueprint.testing.request ()
          .get ('/users')
          .expect (200, done);
      });
    });
    context ('POST', function () {
      it ('should create a user in the database', function (done) {
        let params = {
          user: {
            name: "John"
          }
        };
        blueprint.testing.request ()
          .post ('/users')
          .send(params)
          .expect (200, done);
      });
    });
    describe ('/:userID', function () {
      context ('GET', function () {
        it ('should get a users in the database by ID', function (done) {
          blueprint.testing.request ()
            .get ('/users/5a28589955d94861fa56006d')
            .expect (200, done);
        });
      });
      context ('POST', function () {
        it ('should create a user in the database with the given ID', function (done) {
          let params = {
            user: {
              name: "Steve",
              _id: "5a28589955d94861fa56006d"
            }
          };
          blueprint.testing.request ()
            .post ('/users/')
            .send(params)
            .expect (200, done);
        });
      });
    });
  });
});