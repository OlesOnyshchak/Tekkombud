angular.module('app')
    .controller('HomeController', ['$scope', function ($scope) {
        $scope.myInterval = 5000;
        const FIRST_PART = "Part 1 of 7: Finding a Location";
        const SECOND_PART = "Part 2 of 7: Designing Your Home";
        const THIRD_PART = "Part 3 of 7: Getting the Necessary Permits";
        const FORTH_PART = "Part 4 of 7: Breaking Ground";
        const FIFTH_PART = "Part 5 of 7: Building the Walls and Roof";
        const SIXTH_PART = "Part 6 of 7: Starting on the Interior";
        const SEVENTH_PART = "Part 7 of 7: Installing the Essentials";
        $scope.slides =
            [
                {
                    "ImageID": 1,
                    "Title": FIRST_PART,
                    "Summary": "first step",
                    "Path": "app/welcome/util/photo/home/1.jpg"
                },
                {
                    "ImageID": 2,
                    "Title": FIRST_PART,
                    "Summary": "second step",
                    "Path": "app/welcome/util/photo/home/2.jpg"
                },
                {
                    "ImageID": 3,
                    "Title": FIRST_PART,
                    "Summary": "third step",
                    "Path": "app/welcome/util/photo/home/3.jpg"
                },
                {
                    "ImageID": 4,
                    "Title": FIRST_PART,
                    "Summary": "forth step",
                    "Path": "app/welcome/util/photo/home/4.jpg"
                },
                {
                    "ImageID": 1,
                    "Title": SECOND_PART,
                    "Summary": "fifth step",
                    "Path": "app/welcome/util/photo/home/5.jpg"
                },
                {
                    "ImageID": 2,
                    "Title": SECOND_PART,
                    "Summary": "sixth step",
                    "Path": "app/welcome/util/photo/home/6.jpg"
                },
                {
                    "ImageID": 3,
                    "Title": SECOND_PART,
                    "Summary": "seventh step",
                    "Path": "app/welcome/util/photo/home/7.jpg"
                },
                {
                    "ImageID": 4,
                    "Title": SECOND_PART,
                    "Summary": "eighth step",
                    "Path": "app/welcome/util/photo/home/8.jpg"
                },
                {
                    "ImageID": 5,
                    "Title": SECOND_PART,
                    "Summary": "ninth step",
                    "Path": "app/welcome/util/photo/home/9.jpg"
                },
                {
                    "ImageID": 1,
                    "Title": THIRD_PART,
                    "Summary": "tenth step",
                    "Path": "app/welcome/util/photo/home/10.jpg"
                },
                {
                    "ImageID": 2,
                    "Title": THIRD_PART,
                    "Summary": "eleventh step",
                    "Path": "app/welcome/util/photo/home/11.jpg"
                },
                {
                    "ImageID": 3,
                    "Title": THIRD_PART,
                    "Summary": "twelfth step",
                    "Path": "app/welcome/util/photo/home/12.jpg"
                },
                {
                    "ImageID": 4,
                    "Title": THIRD_PART,
                    "Summary": "thirteenth step",
                    "Path": "app/welcome/util/photo/home/13.jpg"
                },
                {
                    "ImageID": 5,
                    "Title": THIRD_PART,
                    "Summary": "fourteenth step",
                    "Path": "app/welcome/util/photo/home/14.jpg"
                },
                {
                    "ImageID": 6,
                    "Title": THIRD_PART,
                    "Summary": "fifteenth step",
                    "Path": "app/welcome/util/photo/home/15.jpg"
                },
                {
                    "ImageID": 1,
                    "Title": FORTH_PART,
                    "Summary": "sixteenth step",
                    "Path": "app/welcome/util/photo/home/16.jpg"
                },
                {
                    "ImageID": 2,
                    "Title": FORTH_PART,
                    "Summary": "seventeenth step",
                    "Path": "app/welcome/util/photo/home/17.jpg"
                },
                {
                    "ImageID": 3,
                    "Title": FORTH_PART,
                    "Summary": "eighteenth step",
                    "Path": "app/welcome/util/photo/home/18.jpg"
                },
                {
                    "ImageID": 4,
                    "Title": FORTH_PART,
                    "Summary": "nineteenth step",
                    "Path": "app/welcome/util/photo/home/19.jpg"
                },
                {
                    "ImageID": 1,
                    "Title": FIFTH_PART,
                    "Summary": "twenties step",
                    "Path": "app/welcome/util/photo/home/20.jpg"
                },
                {
                    "ImageID": 2,
                    "Title": FIFTH_PART,
                    "Summary": "twenty-first",
                    "Path": "app/welcome/util/photo/home/21.jpg"
                },
                {
                    "ImageID": 3,
                    "Title": FIFTH_PART,
                    "Summary": "twenty-second",
                    "Path": "app/welcome/util/photo/home/22.jpg"
                },
                {
                    "ImageID": 4,
                    "Title": FIFTH_PART,
                    "Summary": "twenty-third",
                    "Path": "app/welcome/util/photo/home/23.jpg"
                },
                {
                    "ImageID": 5,
                    "Title": FIFTH_PART,
                    "Summary": "twenty-forth",
                    "Path": "app/welcome/util/photo/home/24.jpg"
                },
                {
                    "ImageID": 6,
                    "Title": FIFTH_PART,
                    "Summary": "twenty-fifth",
                    "Path": "app/welcome/util/photo/home/25.jpg"
                },
                {
                    "ImageID": 7,
                    "Title": FIFTH_PART,
                    "Summary": "twenty-sixth",
                    "Path": "app/welcome/util/photo/home/26.jpg"
                },
                {
                    "ImageID": 8,
                    "Title": FIFTH_PART,
                    "Summary": "twenty-seventh",
                    "Path": "app/welcome/util/photo/home/27.jpg"
                },
                {
                    "ImageID": 1,
                    "Title": SIXTH_PART,
                    "Summary": "twenty-eighth",
                    "Path": "app/welcome/util/photo/home/28.jpg"
                },
                {
                    "ImageID": 2,
                    "Title": SIXTH_PART,
                    "Summary": "twenty-ninth",
                    "Path": "app/welcome/util/photo/home/29.jpg"
                },
                {
                    "ImageID": 3,
                    "Title": SIXTH_PART,
                    "Summary": "thirties",
                    "Path": "app/welcome/util/photo/home/30.jpg"
                },
                {
                    "ImageID": 4,
                    "Title": SIXTH_PART,
                    "Summary": "thirty-first",
                    "Path": "app/welcome/util/photo/home/31.jpg"
                },
                {
                    "ImageID": 5,
                    "Title": SIXTH_PART,
                    "Summary": "thirty-second",
                    "Path": "app/welcome/util/photo/home/32.jpg"
                },
                {
                    "ImageID": 1,
                    "Title": SEVENTH_PART,
                    "Summary": "thirty-third",
                    "Path": "app/welcome/util/photo/home/33.jpg"
                },
                {
                    "ImageID": 2,
                    "Title": SEVENTH_PART,
                    "Summary": "thirty-forth",
                    "Path": "app/welcome/util/photo/home/34.jpg"
                },
                {
                    "ImageID": 3,
                    "Title": SEVENTH_PART,
                    "Summary": "thirty-fifth",
                    "Path": "app/welcome/util/photo/home/35.jpg"
                },
                {
                    "ImageID": 4,
                    "Title": SEVENTH_PART,
                    "Summary": "thirty-sixth",
                    "Path": "app/welcome/util/photo/home/36.jpg"
                },
                {
                    "ImageID": 5,
                    "Title": SEVENTH_PART,
                    "Summary": "thirty-seventh",
                    "Path": "app/welcome/util/photo/home/37.jpg"
                },
                {
                    "ImageID": 6,
                    "Title": SEVENTH_PART,
                    "Summary": "thirty-eighth",
                    "Path": "app/welcome/util/photo/home/38.jpg"
                },
                {
                    "ImageID": 7,
                    "Title": SEVENTH_PART,
                    "Summary": "thirty-ninth",
                    "Path": "app/welcome/util/photo/home/39.jpg"
                }
            ];
        $scope.intervalDescription = {
            "name": "Interval, in milliseconds:",
            "hint": "Enter a negative number to stop the interval."
        };


    }]);
