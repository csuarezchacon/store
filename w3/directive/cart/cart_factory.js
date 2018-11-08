(function () {
	angular.module('cart-module').factory('cartFactory', [ '$http', '$q', function($http, $q) {
        var vm = this;
        
        vm.cartList = function(){
            var rs = $q.defer();
            $http({
				url: "model/utils/product_get.php",
				method: "GET",
				headers: "{'Content-Type': 'application/x-www-form-urlencoded'}" 
			}).success(function(data, status, header, config) {
				rs.resolve(data);
			}).error(function(data, status, header, config) {
                rs.reject(data);
            });
            return rs.promise;
        };

        vm.itemPush = function(){ // Agrega Item
            var rs = $q.defer();
            $http({
				url: "model/utils/product_add.php",
				method: "GET",
				headers: "{'Content-Type': 'application/x-www-form-urlencoded'}" 
			}).success(function(data, status, header, config) {
				rs.resolve(data);
			}).error(function(data, status, header, config) {
                rs.reject(data);
            });
            return rs.promise;
        };

        vm.itemPop = function(){ // Elimina Item
            return;
        };

        return {
            cartList: vm.cartList,
            itemPush: vm.itemPush,
            itemPop: vm.itemPop
        };
	}]);
})();