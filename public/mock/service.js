var services = angular.module('services', ['ngResource']);

services.factory('Task', function($resource){
  return $resource('mock/tasks/:id.json',{},{
    query: {method:'GET',params:{id:'all'},isArray:true}
    ,get:  {method:'GET',params:{id:1}}
  });
});

services.factory('TaskList', function($resource) {
  return $resource('mock/taskLists/:id.json',{},{
    query: {method:'GET',params:{id:'all'},isArray:true}
    ,get:  {method:'GET',params:{id:1}}
  });
});