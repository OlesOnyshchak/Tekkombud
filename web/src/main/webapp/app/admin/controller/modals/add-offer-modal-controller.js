angular
    .module('admin')
    .controller('AddOfferController', ['$scope','response','SettingService','$modalInstance',function ($scope, response,SettingService,$modalInstance) {

        $scope.offer = response;

        $scope.cancel = function () {
            $modalInstance.close();
        };

        $scope.submit = function () {
            SettingService.saveOffer($scope.offer);
            $modalInstance.close("submit");
        };
    }]);
