var app = angular.module('MyTodoList', ['ngRoute','ctrls','services']);

app.config(function($routeProvider){
	$routeProvider.when('/main',{
		templateUrl: "tmpl/main.html"
	}).when('/detail',{
		templateUrl: "tmpl/taskDetail.html"
	}).otherwise({
		redirectTo: "/main"
	});
});