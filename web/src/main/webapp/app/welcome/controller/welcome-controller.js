angular.module('app')
    .controller('WelcomeController', ['$scope', 'WelcomeService', '$modal', function ($scope, WelcomeService, $modal) {

        $scope.message = {};
        $scope.offerInfo = {};

        $scope.call = function(){
            WelcomeService.call().then(function (data) {
                console.log(data);
            });
        };

        $scope.saveMessage = function (reg) {
            $scope.$broadcast('show-errors-check-validity');
            if ($scope.contactMessage.$valid) {
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
                    $scope.$broadcast('show-errors-reset');
                    $scope.message = {};
                })
            }
        };

        $scope.EMAIL_REGEX = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
        $scope.NAME_REGEX = /^[a-zA-Z а-яА-Я]*$/;
        $scope.TEXT_REGEX = /^[a-zA-Z?!"',. -()а-яА-Я]*$/;
        $scope.PHONE_REGEX = /^[0-9]+$/;

        $scope.clearMessage = function () {
            $scope.$broadcast('show-errors-reset');
            $scope.message = null;
        };

        function getOffers() {
            WelcomeService.getAllOffers().then(function (data) {
                $scope.offerInfo = data;
            });

            $scope.sort = function (keyname) {
                $scope.sortKey = keyname;   //set the sortKey to the param passed
                $scope.reverse = !$scope.reverse; //if true make it false and vice versa
            }
        }

        $scope.attachCV = function (id) {
            var modalInstance = $modal.open({
                animation: true,
                templateUrl: 'app/welcome/template/modals/attach-cv.html',
                controller: 'AttachCVController',
                size: 'md',
                resolve: {
                    response: function () {
                        return id;
                    }
                }
            });
        };

        getOffers();

        $scope.information = function (info) {
            var modalInstance = $modal.open({
                animation: true,
                templateUrl: 'app/welcome/template/modals/info-offer-modal.html',
                controller: 'InfoOfferController',
                size: 'md',
                resolve: {
                    response: function () {
                        return info;
                    }
                }
            });
        };


    }]);