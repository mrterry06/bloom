angular.module('bloom', ["bloom.controllers","ui.router"])

.config(function($stateProvider, $urlRouterProvider, $locationProvider){
	$stateProvider
	
	.state('home', {
	  url: '/',
	  templateUrl: 'templates/home.html',
	  controller: 'mainCtrl'
	})
	.state('chat', {
		url: '/:token',
		templateUrl: "templates/chat.html"
	});

	$urlRouterProvider.otherwise("/");

});
