angular
    .module('app')
    .controller('AttachCVController', ['$scope', 'response', 'WelcomeService', '$modalInstance', function ($scope, response, WelcomeService, $modalInstance) {
        $scope.id = response;
        const ADD_CV_TO_OFFER = "add-cv-to-offer/" + $scope.id;

        $scope.employeeInfo = {};

        $scope.cancel = function () {
            $modalInstance.close();
        };

        $scope.submit = function (employeeInfo) {
            WelcomeService.update(employeeInfo, ADD_CV_TO_OFFER);
            $modalInstance.close();
        };
    }]);
