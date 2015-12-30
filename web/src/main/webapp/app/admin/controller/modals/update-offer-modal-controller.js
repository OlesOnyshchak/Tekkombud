angular
    .module('admin')
    .controller('UpdateOfferController', ['$scope', 'response', 'SettingService', '$modalInstance', function ($scope, response, SettingService, $modalInstance) {

        $scope.info = response;

        $scope.submit = function (info) {
            console.log(info);
            SettingService.updateOffer(info).then(function () {
                $modalInstance.close();
            });
        };

        $scope.cancel = function () {
            $modalInstance.close();
        };
    }]);
