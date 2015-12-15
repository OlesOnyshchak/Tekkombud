angular
    .module('admin')
    .controller('ModalMessageController', ['$scope','SettingService','$modalInstance',function ($scope,SettingService,$modalInstance) {

        $scope.cancel = function () {
            $modalInstance.close();
        };

        $scope.submit = function () {
            $modalInstance.close("submit");
        };
    }]);