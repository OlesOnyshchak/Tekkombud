angular.module('admin')
    .controller('MessageController', ['$scope', '$http', 'SettingService', function ($scope, $http, SettingService) {
        $scope.getMess = function () {
            SettingService.getAll().then(function (data) {
                $scope.messages = data;

            });

            $scope.sort = function(keyname){
                $scope.sortKey = keyname;   //set the sortKey to the param passed
                $scope.reverse = !$scope.reverse; //if true make it false and vice versa
            }
        };
    }]);
