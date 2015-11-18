$(document).ready(function(){
    setInterval(displayNextImage, 5000);
});

var images = [], x = -1;
images[0] = "app/welcome/photo/banner1.jpg";
images[1] = "app/welcome/photo/banner2.jpg";
images[2] = "app/welcome/photo/banner.jpg";

function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img").src = images[x];
}

function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("img").src = images[x];
}


