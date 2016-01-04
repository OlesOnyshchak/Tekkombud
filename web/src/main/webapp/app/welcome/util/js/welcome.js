$(document).ready(function(){
    display(1);
    setInterval(displayNextImage, 5000);
    $('ul li').on('click', function(){
        if(!$(this).hasClass('active')){
            $('li').removeClass('active');
            $(this).addClass('active');
        }
    });
});

var listSelector = "ol li";
var images = [];
var x = -1;
images[0] = "app/welcome/util/photo/banner1.jpg";
images[1] = "app/welcome/util/photo/banner.jpg";
images[2] = "app/welcome/util/photo/banner2.jpg";

function display(position) {
    x = position;
    document.getElementById("img").src = images[position];
    $(listSelector).on('click', function () {
        $(listSelector + ", .active").removeClass('active');
        $(this).addClass('active');
    });
}

function displayNextImage() {
    if(x == 0){
        $(listSelector).first().removeClass('active');
        $(listSelector).first().next().addClass('active');
    }
    else if(x ==images.length - 1 ){
        $(listSelector).last().removeClass('active');
        $(listSelector).first().addClass('active');
    }
    else {
        $(listSelector + ", .active").next().addClass('active');
        $(listSelector + ", .active").prev().removeClass('active');
    }
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img").src = images[x];
}

function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("img").src = images[x];
}





