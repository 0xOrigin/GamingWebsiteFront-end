var slide = document.getElementById('box1');
var images = ['1.png','4.png','12.jpg','14.png'];
var i = 0;
function Next(){
    ++i;
    if(i > images.length)i = 1;
    slide.innerHTML = "<img src='img/" + images[i-1] + "' />";
}
setInterval(Next,5000);
document.querySelector(".hotgames-box .fa-rocket").onclick = function () {
    document.querySelector(".hotgames-box").classList.toggle("show");
}