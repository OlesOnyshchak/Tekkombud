angular
    .module('admin')
    .controller('AddOfferController', ['$scope','SettingService','$modalInstance',function ($scope,SettingService,$modalInstance) {

        $scope.jobInformation = {};

        $scope.cancel = function () {
            $modalInstance.close();
        };

        $scope.submit = function (info) {
            SettingService.saveOffer(info);
            SettingService.getAllOffers().then(function (data) {
                console.log(data);
                $modalInstance.close(data);
            });
        };
    }]);
