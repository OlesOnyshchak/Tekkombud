angular
    .module('admin')
    .controller('DeleteOfferController', ['$scope', 'response', 'SettingService', '$modalInstance', function ($scope, response, SettingService, $modalInstance) {
        $scope.id = response;

        $scope.submit = function () {
            console.log($scope.id);
            SettingService.deleteOfferById($scope.id);
            /*     setTimeout(function(){$modalInstance.close();},3000);*/
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.close();
        };
    }]);

