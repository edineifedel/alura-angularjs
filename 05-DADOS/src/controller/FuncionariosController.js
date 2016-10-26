app.controller('FuncionariosController', function($scope, $http, FuncionarioService) {

	var funcionarios = [];

	function listarFuncionarios() {
		FuncionarioService.query(function(resposta) {
			$scope.funcionarios = resposta;
			$scope.mostra=true;
		});
	}


	listarFuncionarios();
	// $http.get('/funcionarios').success(function(resposta) {
	// 	$scope.funcionarios = resposta;
	// }).error(function(status) {
	// 	$scope.msg = "Houve um erro no processamento. Tente mais tarde"
	// 	console.log(status)
	// })

	$scope.mostra = true;
});