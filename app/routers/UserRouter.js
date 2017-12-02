module.exports = exports = {
  //':userID': { action: 'UserController@get'},
  '/user' : {
    get  : { view   : 'UserController@get' },
    post : { action : 'UserController@create'},

    '/:userID': {
    	get   : { action: 'UserController@get'},
    	post  : { action: 'UserController@create'}
    }
  }
};