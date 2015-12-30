angular
    .module('app')
    .controller('AttachCVController', ['$scope', 'response', 'WelcomeService', '$modalInstance', function ($scope, response, WelcomeService, $modalInstance) {

        const ADD_CV_TO_OFFER = "add-cv-to-offer/1";
        $scope.id = response;

        $scope.employeeInfo = {};

        $scope.cancel = function () {
            $modalInstance.close();
        };

        $scope.submit = function (employeeInfo) {
            console.log(employeeInfo);
            WelcomeService.update(employeeInfo, ADD_CV_TO_OFFER);
            $modalInstance.close();
        };
    }]);
