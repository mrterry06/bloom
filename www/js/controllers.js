angular.module('bloom.controllers', [])

.controller('homeCtrl',["$scope", "$state", function testCtrl($scope, $state){
	$scope.grabProfile = function (){
		$state.go("profile.display");
		console.log("Profile from service");

	}

	$scope.signup = function (){
		console.log($scope.user);
	}
}]);