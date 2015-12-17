angular
    .module('admin')
    .controller('AddOfferController', ['$scope','SettingService','$modalInstance',function ($scope,SettingService,$modalInstance) {

        $scope.cancel = function () {
            $modalInstance.close();
        };

        $scope.submit = function () {
            $modalInstance.close("submit");
        };
    }]);
