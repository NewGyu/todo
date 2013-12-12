app.factory('Task', function($resource){
	return $resource('/task/:id');
});

app.factory('TaskList', function($resource) {
	return $resource('/taskList/:id');
});