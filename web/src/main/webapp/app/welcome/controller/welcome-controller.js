angular.module('app')
    .controller('WelcomeController', ['$scope', 'WelcomeService', '$modal', function ($scope, WelcomeService, $modal) {
        $scope.message = {};
        $scope.offerInfo = {};

        $scope.saveMessage = function (reg) {
            var modalInstance = $modal.open({
                animation: true,
                templateUrl: 'app/welcome/template/modals/confirm-message.html',
                controller: 'ModalWelcomeController',
                size: 'md',
                resolve: {
                    response: function () {
                        return reg;
                    }
                }
            });

            modalInstance.result.then(function (result) {
                if (result === "submit"){
                    $scope.message = {};
                }
            })
        };

        $scope.clearMessage = function () {
            $scope.message = {};
        };

        function getOffers() {
            WelcomeService.getAllOffers().then(function (data) {
                $scope.offerInfo = data;
                console.log( $scope.offerInfo);

            });

            $scope.sort = function(keyname){
                $scope.sortKey = keyname;   //set the sortKey to the param passed
                $scope.reverse = !$scope.reverse; //if true make it false and vice versa
            }
        }
        getOffers();
    }]);