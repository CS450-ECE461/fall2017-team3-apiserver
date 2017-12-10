'use strict';

const dab = require ('@onehilltech/dab')
  ;

module.exports = {
	users: [
		{
			name: 'kyle',
			rating: [1, 2,3],
			skills: ['Archery','Bowstaffs','Computer Science'],
			email: 'kyle@gmail.com',
			phone: '317.000.1111',
			description: 'Hi, my name is kyle',
			portfolio: 'someSortOfPort',
			image: 'someAddress',
			projects: ['First', 'Second', 'Third']
		},
		{
			name: 'Butch',
			rating: [4,5,6],
			skills: ['Interesting','Things','Skills'],
			email: 'butch@gmail.com',
			phone: '317.222.3333',
			description: 'Hi, my name is Butch',
			portfolio: 'someSortOfFolio',
			image: 'differentAddress',
			projects: ['Fourth', 'Fifth', 'Sixth']
		},
		{
			name: 'Justin Bieber',
			rating: [1,0,1],
			skills: ['Singing','Hair','Bad decisions'],
			email: 'biebs@HotMail.com',
			phone: '317.444.5555',
			description: 'Hi, my name is Biebs',
			portfolio: 'PortFolio',
			image: 'someWhereInLA',
			projects: ['Seventh', 'Eighth', 'Ninth']
		}
	],
	projects: [
		{
			name: 'lasso',
			description: 'A really excellent project',
  			skills: ['JavaScript','Design','CSS'],
  			owner: 'some users ID',
  			status: true,
  			collaborators: ['userOneID','userTwoID','userThreeID'],
  			image: 'someLinkToImage'
		},
		{
			name: 'Building a House',
			description: 'A less interesting project',
  			skills: ['Carpentry','Drywall','plumbing'],
  			owner: 'some users ID',
  			status: true,
  			collaborators: ['userFourID','userFiveID','userSixID'],
  			image: 'differentLinkToImage'
  		}
	],
	messages: [
		{
			sender: 'userOneID',
  			receiver: 'userTwoID',
  			body: 'Hey bro how you doing where you been?',
  			read: false
		},
		{
			sender: 'userTwoID',
  			receiver: 'userOneID',
  			body: 'Great, just working on some class projects',
  			read: false
		}
	]
};
