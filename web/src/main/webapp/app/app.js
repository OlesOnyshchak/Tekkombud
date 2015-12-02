angular.module('app',['ngRoute']).config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl:'app/start.html',
            controller: 'WelcomeController'
        })
        .otherwise({ redirectTo: '/'});
});