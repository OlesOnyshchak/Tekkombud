angular.module('app')
    .controller('ProjectController', ['$scope', function ($scope) {
        $scope.myInterval = 5000;
        $scope.slides =
            [
                {
                    "ImageID": 1,
                    "Title": "Railway station ",
                    "Summary": "first building",
                    "Path": "app/welcome/util/photo/1.jpg"
                },
                {
                    "ImageID": 2,
                    "Title": "Modern house  ",
                    "Summary": "second building",
                    "Path": "app/welcome/util/photo/2.jpg"
                },
                {
                    "ImageID": 3,
                    "Title": "Reconstruction ",
                    "Summary": "third building",
                    "Path": "app/welcome/util/photo/3.jpg"
                },
                {
                    "ImageID": 4,
                    "Title": "Detached house",
                    "Summary": "fourth building",
                    "Path": "app/welcome/util/photo/4.jpg"
                }
            ]

    }]);

