(function () {
	angular.module('cart-module').directive('cart', function() {
		return {
			restrict: 'E',
			controller: 'cartController',
			controllerAs: 'vm',
			templateUrl: 'w3/directive/cart/cart.html'
		}
	});
})();