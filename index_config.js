(function (){
	angular.module('index-module').config(
	['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('store');

		$stateProvider.state('store', {
			url: '/store',
			templateUrl: 'w3/pages/store/store.html'
		}).state('cart', {
			url: '/cart',
			templateUrl: 'w3/directive/cart/cart.html'
		});
  }]);
})();
