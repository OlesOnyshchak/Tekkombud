angular.module('employee')
    .controller('SettingController', ['$scope', '$http','SettingService', function ($scope, $http,SettingService) {
        $scope.logout = function () {
            console.log("ok");
            $http({
                method: 'POST',
                url: '/logout'
            }).then(function () {
                window.location.replace("/");
            });
        };
        $scope.loginInf = {};
        $scope.saveUser = function(reg) {
            console.log(reg);
            SettingService.create(reg);
        };
    }]);