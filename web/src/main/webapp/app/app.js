angular.module('app',['ngRoute']).config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl:'app/start.html',
            controller: 'WelcomeController'
        })
        .when('/home',{
            templateUrl:'app/index.html',
            controller: 'WelcomeController'
        })
        .when('/admin', {
            templateUrl: 'app/start.html',
            controller: 'WelcomeController'
        })
        .otherwise({ redirectTo: '/'});
});