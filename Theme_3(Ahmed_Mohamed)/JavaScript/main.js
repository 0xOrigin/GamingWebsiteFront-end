var slideContent = document.getElementById('box');
var images = ['1','2','3','4','5','6'];
var i = images.length;

function nextImage(){
    if(i < images.length)
        ++i;
    else
        i = 1;

    slideContent.innerHTML = "<img src='../images/" + images[i-1] + ".jpg' />";
}

function prewImage(){
    if(i < images.length + 1 && i > 1)
        --i;
    else
        i = images.length;

    slideContent.innerHTML = "<img src='../images/" + images[i-1] + ".jpg' />";
}

setInterval(nextImage,5000);