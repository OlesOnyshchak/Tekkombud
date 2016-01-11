angular.module('app')
    .controller('HomeController', ['$scope', function ($scope) {
        $scope.slides =
        {
            imgName: "app/welcome/util/photo/banner1.jpg"
        };

        $scope.selected = 'tab1';
        $scope.select = function (item) {
            if (item == 'tab1') {
                $scope.slides.imgName = "app/welcome/util/photo/banner1.jpg";
            }
            else if (item == 'tab2') {
                $scope.slides.imgName = "app/welcome/util/photo/banner.jpg";
            }
            else {
                $scope.slides.imgName = "app/welcome/util/photo/banner2.jpg";
            }
            $scope.selected = item;
        };

    }]);
