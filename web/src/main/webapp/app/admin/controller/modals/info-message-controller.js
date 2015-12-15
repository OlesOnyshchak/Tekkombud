angular
    .module('admin')
    .controller('InfoMessageController', ['$scope', 'response', 'SettingService', '$modalInstance', function ($scope, response, SettingService, $modalInstance) {
        $scope.info = response;
        $scope.cancel = function () {
            $modalInstance.close();
        };
    }]);
