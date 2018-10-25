(function () {
	angular.module('cart-module').controller('cartController', [ '$http', '$q', function($http, $q) {
		var vm = this;
		vm.cart = {};

		vm.addProduct = function() {
			$http({
				url: "model/utils/product_add.php",
				method: "GET",
				headers: "{'Content-Type': 'application/x-www-form-urlencoded'}" 
			}).success(function(data, status, header, config) {
				vm.cart = data;
			});
		};

		vm.openCart = function() {
			getCart().then(function(rs) {
				if(rs) {
					alert("ya existe");
				} else {
					vm.createCart();
				}
			});
		};

		var getCart = function() {
			var deferred = $q.defer();
			$http({
				url: "model/utils/cart-status_get.php",
				method: "GET"
			}).success(function(data, status, header, config) {
				deferred.resolve(data);
			}).error(function(data, status, header, config) {
				deferred.reject(data);
			});
			return deferred.promise;
		};

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