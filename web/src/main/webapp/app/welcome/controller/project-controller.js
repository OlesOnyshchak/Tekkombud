angular.module('app')
    .controller('ProjectController', ['$scope', function ($scope) {
        $scope.myInterval = 5000;
        $scope.slides =
            [
                {
                    "ImageID": 1,
                    "Title": "Tulips",
                    "Summary": "This is summary of Tulips",
                    "Path": "app/welcome/util/photo/banner1.jpg"
                },
                {
                    "ImageID": 2,
                    "Title": "Jellyfish",
                    "Summary": "This is something about Jellyfish",
                    "Path": "app/welcome/util/photo/banner.jpg"
                },
                {
                    "ImageID": 3,
                    "Title": "Lighthouse",
                    "Summary": "Summary of Lighthouse",
                    "Path": "app/welcome/util/photo/banner2.jpg"
                },
                {
                    "ImageID": 4,
                    "Title": "Penguins",
                    "Summary": "Something about Penguins",
                    "Path": "app/welcome/util/photo/banner1.jpg"
                }
            ]

    }]);

