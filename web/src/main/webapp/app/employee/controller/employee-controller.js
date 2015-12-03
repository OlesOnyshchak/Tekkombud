angular.module('employee')
    .controller('SettingController', ['$scope', '$http', function ($scope, $http) {
        $scope.logout = function () {
            console.log("ok");
            $http({
                method: 'POST',
                url: '/logout'
            }).then(function () {
                window.location.replace("/");
            });
        };
    }]);