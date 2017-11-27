module.exports = exports = {
  ':userID': { action: 'UserController@getUser'},
  '/user' : {
    get  : { view   : 'User.pug' },
    post : { action : 'UserController@getUser'},

    '/:userID': {
    	get   : { action: 'UserController@getUser'}
    }
  }
};