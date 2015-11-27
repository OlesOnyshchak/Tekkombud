angular.module('app')
    .controller('WelcomeController', ['$scope','WelcomeService', function($scope, WelcomeService) {
        $scope.loginInfo = {};
        $scope.login = {};
        $scope.saveUser = function(reg) {
            console.log(reg);
            WelcomeService.create(reg);
        };

        $scope.save = function(reg) {
            console.log(reg);
            WelcomeService.create(reg);
        };
    }]);