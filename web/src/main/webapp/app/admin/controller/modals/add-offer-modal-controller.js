angular
    .module('admin')
    .controller('AddOfferController', ['$scope','SettingService','$modalInstance',function ($scope,SettingService,$modalInstance) {

        $scope.jobInformation = {};

        $scope.cancel = function () {
            $modalInstance.close();
        };

        $scope.clear = function () {
            $scope.jobInformation = {};
        };

        $scope.submit = function (info) {
            SettingService.saveOffer(info).then(function () {
                $modalInstance.close();
            });
        };
    }]);
