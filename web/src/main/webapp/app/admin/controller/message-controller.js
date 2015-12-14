angular.module('admin')
    .controller('MessageController', ['$scope', '$http','SettingService', function ($scope, $http, SettingService) {
        $scope.getMess = function() {
           SettingService.getAll();
        };
    }]);
