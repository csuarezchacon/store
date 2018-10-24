(function () {
	angular.module('cart-module').controller('cartController', [ '$http', function($http) {
		var vm = this;
		vm.cart = {};

		vm.openCart = function() {
			getCart().then(function(rs) {
				alert("holo");
				/*if(rs) {
					alert("ya existe");
				} else {
					vm.createCart();
				}*/
			});
		};

		function getCart() {
			$http({
				url: "model/utils/cart-status_get.php",
				method: "GET",
				headers: "{'Content-Type': 'application/x-www-form-urlencoded'}" 
			}).success(function(data, status, header, config) {
				return data;
			});
		}

		vm.createCart = function() {
			$http({
				url: "model/utils/cart_set.php",
				method: "GET",
				headers: "{'Content-Type': 'application/x-www-form-urlencoded'}" 
			}).success(function(data, status, header, config) {
				vm.cart = data;
			});
		}

		vm.deleteCart = function() {
			$http({
				url: "model/utils/cart_unset.php",
				method: "GET",
				headers: "{'Content-Type': 'application/x-www-form-urlencoded'}" 
			}).success(function(data, status, header, config) {
				alert(data);
			});
		}
	}]);
})();