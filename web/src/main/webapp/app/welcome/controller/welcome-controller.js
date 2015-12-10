angular.module('app')
    .controller('WelcomeController', ['$scope','WelcomeService', function($scope, WelcomeService) {
        $scope.loginInf = {};
        $scope.login = {};

        function initialize() {
            var mapProp = {
                center:new google.maps.LatLng(51.508742,-0.120850),
                zoom:5,
                mapTypeId:google.maps.MapTypeId.ROADMAP
            };
            var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
        }
        google.maps.event.addDomListener(window, 'load', initialize);



        $scope.saveUser = function(reg) {
            console.log(reg);
            WelcomeService.create(reg);
        };

        $scope.save = function(reg) {
            console.log(reg);
            WelcomeService.create(reg);
        };
    }]);