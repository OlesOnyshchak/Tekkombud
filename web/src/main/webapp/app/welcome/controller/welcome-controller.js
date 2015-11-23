angular.module('app')
    .controller('WelcomeController', ['$scope','WelcomeService', function($scope, WelcomeService) {
        $scope.loginInfo = {};
        $scope.saveUser = function(reg) {
            console.log(reg);
            WelcomeService.create(reg);
        };
    }]);