app.controller('HelloController', function($scope){
	$scope.total=0;

	$scope.clicar = function() {
		$scope.total++;
	}
})

