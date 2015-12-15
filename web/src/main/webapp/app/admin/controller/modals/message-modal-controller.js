angular
    .module('admin')
    .controller('ModalMessageController', ['$scope','response','SettingService','$modalInstance',function ($scope, response,SettingService,$modalInstance) {

        $scope.cancel = function () {
            $modalInstance.close();
        };

        $scope.submit = function () {
            SettingService.deleteMessageById(response);
            $modalInstance.close("submit");
        };
    }]);