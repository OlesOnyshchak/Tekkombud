angular
    .module('admin')
    .controller('AddOfferController', ['$scope','SettingService','$modalInstance',function ($scope,SettingService,$modalInstance) {

        $scope.jobInformation = {};

        $scope.cancel = function () {
            $modalInstance.close();
        };

        $scope.submit = function (info) {
            SettingService.saveOffer(info).then(function () {
                $modalInstance.close();
            });
        };
    }]);
