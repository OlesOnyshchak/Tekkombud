angular
    .module('app')
    .controller('InfoOfferController', ['$scope', 'response', '$modalInstance', function ($scope, response, $modalInstance) {

        $scope.info = response;

        $scope.cancel = function () {
            $modalInstance.close();
        };
    }]);