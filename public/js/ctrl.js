var ctrls = angular.module('ctrls', []);

ctrls.controller('ListGroupCtrl', function($scope, TaskList) {
	$scope.listGroups = TaskList.query();
	$scope.listGroup = $scope.listGroups[2];
});

ctrls.controller('TodoListCtrl', function($scope, $location, Task){
	$scope.tasks = Task.query();
	console.log($scope.tasks)
	$scope.addNewTask = function() {
		$location.path("/detail");
	}
});