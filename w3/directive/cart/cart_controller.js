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

		vm.deleteCart = function() {
			$http({
				url: "model/utils/cart_unset.php",
				method: "GET",
				headers: "{'Content-Type': 'application/x-www-form-urlencoded'}" 
			}).success(function(data, status, header, config) {
				cartGet();
			});
		}
	}]);
})();