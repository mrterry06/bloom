

describe('bloom.controllers', function(){
	beforeEach(module('bloom.controllers'));
	var $controller;

	beforeEach(inject(function(_$controller_){

		$controller = _$controller_;
	}));

	describe('$scope.sum', function(){
		it('it add the results of two numbers', function(){
			var $scope = {};
			var controller = $controller('testCtrl', {$scope: $scope});
			expect($scope.sum(2, 3)).toEqual(5);
		});
	});
});