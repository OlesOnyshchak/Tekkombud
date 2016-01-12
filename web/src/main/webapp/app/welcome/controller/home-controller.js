angular.module('app')
    .controller('HomeController', ['$scope', function ($scope) {
        $scope.myInterval = 5000;
        $scope.slides =
            [
                {
                    "ImageID": 1,
                    "Title": "Part 1 of 7: Finding a Location",
                    "Summary": "first step",
                    "Path": "app/welcome/util/photo/home/1.jpg"
                },
                {
                    "ImageID": 2,
                    "Title": "Part 1 of 7: Finding a Location",
                    "Summary": "second step",
                    "Path": "app/welcome/util/photo/home/2.jpg"
                },
                {
                    "ImageID": 3,
                    "Title": "Part 1 of 7: Finding a Location",
                    "Summary": "third step",
                    "Path": "app/welcome/util/photo/home/3.jpg"
                },
                {
                    "ImageID": 4,
                    "Title": "Part 1 of 7: Finding a Location",
                    "Summary": "forth step",
                    "Path": "app/welcome/util/photo/home/4.jpg"
                },
                {
                    "ImageID": 1,
                    "Title": "Part 2 of 7: Designing Your Home",
                    "Summary": "fifth step",
                    "Path": "app/welcome/util/photo/home/5.jpg"
                },
                {
                    "ImageID": 2,
                    "Title": "Part 2 of 7: Designing Your Home",
                    "Summary": "sixth step",
                    "Path": "app/welcome/util/photo/home/6.jpg"
                },
                {
                    "ImageID": 3,
                    "Title": "Part 2 of 7: Designing Your Home",
                    "Summary": "seventh step",
                    "Path": "app/welcome/util/photo/home/7.jpg"
                },
                {
                    "ImageID": 4,
                    "Title": "Part 2 of 7: Designing Your Home",
                    "Summary": "eighth step",
                    "Path": "app/welcome/util/photo/home/8.jpg"
                },
                {
                    "ImageID": 5,
                    "Title": "Part 2 of 7: Designing Your Home",
                    "Summary": "ninth step",
                    "Path": "app/welcome/util/photo/home/9.jpg"
                },
                {
                    "ImageID": 1,
                    "Title": "Part 3 of 7: Getting the Necessary Permits",
                    "Summary": "tenth step",
                    "Path": "app/welcome/util/photo/home/10.jpg"
                },
                {
                    "ImageID": 2,
                    "Title": "Part 3 of 7: Getting the Necessary Permits",
                    "Summary": "eleventh step",
                    "Path": "app/welcome/util/photo/home/11.jpg"
                },
                {
                    "ImageID": 3,
                    "Title": "Part 3 of 7: Getting the Necessary Permits",
                    "Summary": "twelfth step",
                    "Path": "app/welcome/util/photo/home/12.jpg"
                },
                {
                    "ImageID": 4,
                    "Title": "Part 3 of 7: Getting the Necessary Permits",
                    "Summary": "thirteenth step",
                    "Path": "app/welcome/util/photo/home/13.jpg"
                },
                {
                    "ImageID": 5,
                    "Title": "Part 3 of 7: Getting the Necessary Permits",
                    "Summary": "fourteenth step",
                    "Path": "app/welcome/util/photo/home/14.jpg"
                },
                {
                    "ImageID": 6,
                    "Title": "Part 3 of 7: Getting the Necessary Permits",
                    "Summary": "fifteenth step",
                    "Path": "app/welcome/util/photo/home/15.jpg"
                },
                {
                    "ImageID": 1,
                    "Title": "Part 4 of 7: Breaking Ground",
                    "Summary": "sixteenth step",
                    "Path": "app/welcome/util/photo/home/16.jpg"
                },
                {
                    "ImageID": 2,
                    "Title": "Part 4 of 7: Breaking Ground",
                    "Summary": "seventeenth step",
                    "Path": "app/welcome/util/photo/home/17.jpg"
                },
                {
                    "ImageID": 3,
                    "Title": "Part 4 of 7: Breaking Ground",
                    "Summary": "eighteenth step",
                    "Path": "app/welcome/util/photo/home/18.jpg"
                },
                {
                    "ImageID": 4,
                    "Title": "Part 4 of 7: Breaking Ground",
                    "Summary": "nineteenth step",
                    "Path": "app/welcome/util/photo/home/19.jpg"
                },
                {
                    "ImageID": 1,
                    "Title": "Part 5 of 7: Building the Walls and Roof",
                    "Summary": "twenties step",
                    "Path": "app/welcome/util/photo/home/20.jpg"
                },
                {
                    "ImageID": 2,
                    "Title": "Part 5 of 7: Building the Walls and Roof",
                    "Summary": "twenty-first",
                    "Path": "app/welcome/util/photo/home/21.jpg"
                },
                {
                    "ImageID": 3,
                    "Title": "Part 5 of 7: Building the Walls and Roof",
                    "Summary": "twenty-second",
                    "Path": "app/welcome/util/photo/home/22.jpg"
                },
                {
                    "ImageID": 4,
                    "Title": "Part 5 of 7: Building the Walls and Roof",
                    "Summary": "twenty-third",
                    "Path": "app/welcome/util/photo/home/23.jpg"
                },
                {
                    "ImageID": 5,
                    "Title": "Part 5 of 7: Building the Walls and Roof",
                    "Summary": "twenty-forth",
                    "Path": "app/welcome/util/photo/home/24.jpg"
                },
                {
                    "ImageID": 6,
                    "Title": "Part 5 of 7: Building the Walls and Roof",
                    "Summary": "twenty-fifth",
                    "Path": "app/welcome/util/photo/home/25.jpg"
                },
                {
                    "ImageID": 7,
                    "Title": "Part 5 of 7: Building the Walls and Roof",
                    "Summary": "twenty-sixth",
                    "Path": "app/welcome/util/photo/home/26.jpg"
                },
                {
                    "ImageID": 8,
                    "Title": "Part 5 of 7: Building the Walls and Roof",
                    "Summary": "twenty-seventh",
                    "Path": "app/welcome/util/photo/home/27.jpg"
                },
                {
                    "ImageID": 1,
                    "Title": "Part 6 of 7: Starting on the Interior",
                    "Summary": "twenty-eighth",
                    "Path": "app/welcome/util/photo/home/28.jpg"
                },
                {
                    "ImageID": 2,
                    "Title": "Part 6 of 7: Starting on the Interior",
                    "Summary": "twenty-ninth",
                    "Path": "app/welcome/util/photo/home/29.jpg"
                },
                {
                    "ImageID": 3,
                    "Title": "Part 6 of 7: Starting on the Interior",
                    "Summary": "thirties",
                    "Path": "app/welcome/util/photo/home/30.jpg"
                },
                {
                    "ImageID": 4,
                    "Title": "Part 6 of 7: Starting on the Interior",
                    "Summary": "thirty-first",
                    "Path": "app/welcome/util/photo/home/31.jpg"
                },
                {
                    "ImageID": 5,
                    "Title": "Part 6 of 7: Starting on the Interior",
                    "Summary": "thirty-second",
                    "Path": "app/welcome/util/photo/home/32.jpg"
                },
                {
                    "ImageID": 1,
                    "Title": "Part 7 of 7: Installing the Essentials",
                    "Summary": "thirty-third",
                    "Path": "app/welcome/util/photo/home/33.jpg"
                },
                {
                    "ImageID": 2,
                    "Title": "Part 7 of 7: Installing the Essentials",
                    "Summary": "thirty-forth",
                    "Path": "app/welcome/util/photo/home/34.jpg"
                },
                {
                    "ImageID": 3,
                    "Title": "Part 7 of 7: Installing the Essentials",
                    "Summary": "thirty-fifth",
                    "Path": "app/welcome/util/photo/home/35.jpg"
                },
                {
                    "ImageID": 4,
                    "Title": "Part 7 of 7: Installing the Essentials",
                    "Summary": "thirty-sixth",
                    "Path": "app/welcome/util/photo/home/36.jpg"
                },
                {
                    "ImageID": 5,
                    "Title": "Part 7 of 7: Installing the Essentials",
                    "Summary": "thirty-seventh",
                    "Path": "app/welcome/util/photo/home/37.jpg"
                },
                {
                    "ImageID": 6,
                    "Title": "Part 7 of 7: Installing the Essentials",
                    "Summary": "thirty-eighth",
                    "Path": "app/welcome/util/photo/home/38.jpg"
                },
                {
                    "ImageID": 7,
                    "Title": "Part 7 of 7: Installing the Essentials",
                    "Summary": "thirty-ninth",
                    "Path": "app/welcome/util/photo/home/39.jpg"
                }
            ];
        $scope.intervalDescription = {
            "name": "Interval, in milliseconds:",
            "hint": "Enter a negative number to stop the interval."
        };


    }]);
