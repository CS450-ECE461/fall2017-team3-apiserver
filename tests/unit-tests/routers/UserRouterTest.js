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
            id: 'test-user@example.com',
            password: 'test',
            name: 'John Doe',
            rating: [1.2, 5],
            skills: ['roofing', 'construction', 'land surveys'],
            email: 'user_three@example.com',
            image: '/assets/images/profile.png',
            description: 'I build a house from the ground up!',
            portfolio: 'projects.construction.com',
            projects: ['project_2'],
            phone: '317.444.5555'
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
            .get ('/users/5a319cbf9299f29bf63ec3af')
            .expect (200, done);
        });
      });
      context ('POST', function () {
        it ('should create a user in the database with the given ID', function (done) {
        let params = {
          user: {
            _id: "5a28589955d94861fa56006d",
            id: 'test-user@example.com',
              password: 'test',
            name: 'John Doe',
            rating: [1.2, 5],
            skills: ['roofing', 'construction', 'land surveys'],
            email: 'user_three@example.com',
            image: '/assets/images/profile.png',
            description: 'I build a house from the ground up!',
            portfolio: 'projects.construction.com',
            projects: ['project_2'],
            phone: '317.444.5555'
          }
        };
        blueprint.testing.request ()
          .post ('/users/')
          .send(params)
          .expect (200, done);
        });
      });
      context ('POST', function () {
        it ('should update a user in the database with the given ID', function (done) {
          let params = {
            user: {
              name: "Richard Johnson"
            }
          };
          blueprint.testing.request ()
            .post ('/users/5a319cbf9299f29bf63ec3af')
            .send(params)
            .expect (200, done);
        });
      });
      context ('DELETE', function () {
        it ('should delete a user in the database with the given ID', function (done) {
          blueprint.testing.request ()
            .delete ('/users/5a319cbf9299f29bf63ec3af')
            .expect (200, done);
        });
      });
    });
  });
});