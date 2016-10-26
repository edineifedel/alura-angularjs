angular.module('minhasDiretivas', []).directive('meuPainel', function() {

	var directive = {
		restrict: 'E',
		templateUrl: 'directives/meu-painel.html',
		transclude: true,
		scope: {
			titulo: '@'
		}
	}

	return directive;
})