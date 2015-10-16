Router.configure({
	layoutTemplate: 'MasterLayout'
//	loadingTemplate: 'Loading',
//	notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('/result', {
	name: 'result',
	controller: 'ResultController',
	where: 'client'
});