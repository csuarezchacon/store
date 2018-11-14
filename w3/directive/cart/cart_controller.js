(function () {
	angular.module('cart-module').controller('cartController', [ '$http', '$q', 'cartFactory', function($http, $q, cartFactory) {
		var vm = this;

		vm.cart = {};
		cartGet();
		
		function cartGet() {
			cartFactory.cartList().then(function(rs) {
				vm.cart = rs;
			});
		};
		
		vm.itemPush = function() {
			cartFactory.itemPush().then(function(rs) {
				cartGet();
			});
		};

		vm.itemPop = function(index) {
			cartFactory.itemPop(index).then(function(rs) {
				cartGet();
			});
		}
	}]);
})();