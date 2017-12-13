'use strict';

const dab = require ('@onehilltech/dab')
  ;

module.exports = {
	users: [
		{
      id: 'user_one@example.com',
      password: 'userone',
      name: 'Phyllis Kingsley',
      rating: [3.5, 5],
      skills: ['Photography', 'Adobe Design Suite', 'Painting'],
      email: 'user_one@example.com',
      image: '/assets/images/profile.png',
      description: 'I am passionate about taking the perfect photograph and the best designs. Willing to participate in any project',
      portfolio: 'phylliskingsley.com',
      projects: ['project_1','project_4'],
      conversations: ["conversation_1", "conversation_2"],
			phone: '317.000.1111'
		},
		{
      id: 'user_two@example.com',
      password: 'usertwo',
      name: 'Daniel Yeager',
      rating: [5.0, 4.5, 3.5],
      skills: ['Landscaping', 'Plumbing', 'roofing'],
      email: 'user_two@example.com',
      image: '/assets/images/profile.png',
      description: 'You will find me useful in any home repair activities, inside and out',
      portfolio: 'danielyeager.blogpost.com',
      projects: ['project_2'],
			phone: '317.222.3333'
		},
		{
      id: 'user_three@example.com',
      password: 'userthree',
      name: 'Adam Carpenter',
      rating: [1.2, 5],
      skills: ['roofing', 'construction', 'land surveys'],
      email: 'user_three@example.com',
      image: '/assets/images/profile.png',
      description: 'I build a house from the ground up!',
      portfolio: 'projects.construction.com',
      projects: ['project_2'],
			phone: '317.444.5555'
		},
    {
      id: 'user_four@example.com',
      password: 'userfour',
      name: 'James Cooper',
      rating: [3, 1.5],
      skills: ['CAD', '3D Modeling'],
      email: 'user_four@example.com',
      image: '/assets/images/profile.png',
      description: 'Want 3D models? You need my help!',
      portfolio: '3dmodels.net',
      projects: ['project_2'],
      phone: '317.666.5555'
    },
    {
      id: 'user_five@example.com',
      password: 'userfive',
      name: 'Jessica Watkins',
      rating: [3, 1.5],
      skills: ['HTML', 'CSS', 'javascript'],
      email: 'user_five@example.com',
      image: '/assets/images/profile.png',
      description: 'Web Development is what I do for a living.',
      portfolio: 'jessjo.com',
      projects: ['project_1','project_4'],
      phone: '317.777.5555'
		},
    {
      id: 'user_six@example.com',
      password: 'usersix',
      name: 'Megan Williamson',
      rating: [3, 1.5],
      skills: ['cooking', 'baking', 'Food Service'],
      email: 'user_five@example.com',
      image: '/assets/images/profile.png',
      description: 'Web Development is what I do for a living.',
      portfolio: 'awesomefood.chefs.org',
      projects: ['project_3'],
      phone: '317.888.5555'
    }

  ],
	projects: [
    {
      id: 'project_1',
      name: 'Collaboration App',
      description: "Create an application to allow makers to connect with projects in their area." ,
      skills: ['web design', 'web development', 'software testing'],
      owner: 'Owner One',
      active: false,
      collaborators: ['user_five@example.com','user_one@example.com'],
      image: '/assets/images/project.png'
    },
    {
      id: 'project_2',
      name: 'Building a Shed',
      description: 'building an awesome shed out of plastic',
      skills: ['construction', 'Land Surveying'],
      owner: 'Owner Two',
      active: false,
      collaborators: ['user_three@example.com','user_two@example.com','user_four@example.com'],
      image: '/assets/images/project.png'
    },
    {
      id: 'project_3',
      name: 'catering event',
      description: 'provide awesome food to an awesome event',
      skills: ['cooking', 'baking'],
      owner: 'Owner Three',
      active: false,
      collaborators: ['user_six@example.com'],
      image: '/assets/images/project.png'
    },
    {
      id: 'project_4',
      name: 'Educational Web App',
      description: 'To help Math students in our local school, I want to help create an educational app that provides sample problems and solutions to common assignments',
      skills: ['HTML', 'CSS', 'javascript','web development'],
      owner: 'Owner Four',
      active: true,
      collaborators: ['user_one@example.com','user_five@example.com'],
      image: '/assets/images/project.png'
    }
	],
	messages: [
		{
			sender: 'user_one@example.com',
  			receiver: 'user_two@example.com',
  			body: 'Hey bro how you doing where you been?',
  			read: false
		},
		{
			sender: 'user_two@example.com',
  			receiver: 'user_one@example.com',
  			body: 'Great, just working on some class projects',
  			read: false
		}
	]
};
