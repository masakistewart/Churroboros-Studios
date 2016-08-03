app.controller('MainController', function($scope, $http){
	$http.get('/data/team.json').then(function(data) {
		var teams = data.data;
		$scope.row1 = [teams[0], teams[1], teams[2]]
		$scope.row2 = [teams[3], teams[4], teams[5]]
		console.log(teams)
	});
})