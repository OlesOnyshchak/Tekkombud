angular
    .module('admin')
    .controller('DeleteOfferController', ['$scope', 'response', 'SettingService', '$modalInstance', function ($scope, response, SettingService, $modalInstance) {
        $scope.id = response;

        $scope.submit = function () {
            console.log($scope.id);
            SettingService.deleteOfferById($scope.id).then(function () {
                $modalInstance.close();
            });
        };

        $scope.cancel = function () {
            $modalInstance.close();
        };
    }]);

