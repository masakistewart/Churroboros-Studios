app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'pages/landing.html'
	})
	.when('/contact', {
		templateUrl: 'pages/contact.html'
	})
	.when('/team', {
		templateUrl: 'pages/team.html'
	})
})