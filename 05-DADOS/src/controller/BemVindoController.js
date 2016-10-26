app.controller('BemVindoController', function($scope, FuncionarioService) {

	var funcionarios = [];

	function listarFuncionarios() {
		FuncionarioService.query(function(resposta) {
			$scope.funcionarios = resposta;
			$scope.mostra=true;
		});
	}

	listarFuncionarios();

});