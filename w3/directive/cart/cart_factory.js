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

        vm.itemPop = function(in_index){ // Elimina Item
            var rs = $q.defer();
            var dataJson = $.param({
                index: in_index
            });
            $http({
				url: 'model/utils/product_pop.php',
                method: 'POST',
                data: dataJson,
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			}).success(function(data, status, header, config) {
				rs.resolve();
			}).error(function(data, status, header, config) {
                rs.reject();
            });
            return rs.promise;
        }

        return {
            cartList: vm.cartList,
            itemPush: vm.itemPush,
            itemPop: vm.itemPop
        };
	}]);
})();