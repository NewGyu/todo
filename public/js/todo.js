var app = angular.module('MyTodoList', []);

app.controller('ListGroupCtrl', function($scope) {
	$scope.listGroups = [
		{id:22 ,name:"俺のリスト"}
		,{id:23 ,name:"アレのリスト"}
		,{id:25 ,name:"砂肝リスト"}
	];
	$scope.listGroup = $scope.listGroups[2];
});

app.controller('TodoListCtrl', function($scope){
	$scope.tasks = [
		{id:2, title:"アレをする",done:false}
		,{id:3, title:"これをする",done:false}
		,{id:4, title:"あのへんをする",done:false}
		,{id:5, title:"どれをする",done:true}
		,{id:6, title:"それをする",done:false}
	];
});