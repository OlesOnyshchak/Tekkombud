angular.module('admin')
    .controller('SettingController', ['$scope', '$http','SettingService', function ($scope, $http, SettingService) {
        $scope.isLoaded = false;
        $scope.logout = function () {
            $http({
                method: 'POST',
                url: '/logout'
            }).then(function () {
                window.location.replace("/");
            });
        };
        $scope.loginInf = {};
        $scope.saveUser = function(reg) {
            SettingService.create(reg);
        };

        $scope.acounts = [
            {
                name: "logout"
            }];
        $scope.isLoaded = true;
    }]);

