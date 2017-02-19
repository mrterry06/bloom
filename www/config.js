angular.module('bloom', ["bloom.controllers","ui.router"])

.config(["$stateProvider", "$urlRouterProvider", "$locationProvider" ,function($stateProvider, $urlRouterProvider, $locationProvider){
	$stateProvider
	
	.state('home', {
	  url: '/',
	  templateUrl: 'templates/home.html',
	  controller: 'homeCtrl'
	})
	.state('chat', {
		url: '/:token',
		templateUrl: "templates/chat.html"
	})
	.state("profile", {
		url: '/profile',
		templateUrl: "templates/profile.html",
		abstract: true
	})
	.state("profile.display", {
		url: '/display',
		views: {
			"user-profile" :{
				templateUrl: "templates/profile/profile-display.html"
			}
		}
	});
	// $locationProvider.html5Mode({
	// 	// enabled: true,
	// 	// requireBase: false,
	// 	// rewriteLinks: false
	// });

	$locationProvider.hashPrefix("");
	$urlRouterProvider.otherwise("/");

}]);
