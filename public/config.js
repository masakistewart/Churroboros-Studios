app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/pages/landing.html',
		controller: 'MainController'
	})
	.otherwise({
		templateUrl: "views/pages/404.html"
	})
})