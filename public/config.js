app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/pages/landing.html',
		controller: 'MainController'
	})
	.when('/about', {
		templateUrl: 'views/pages/team.html',
		controller: 'MainController'
	})
})