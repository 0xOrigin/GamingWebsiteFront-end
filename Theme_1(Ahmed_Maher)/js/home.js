$(".dropdown-menu li a").click(function () {
    var selText = $(this).text();
    var imgSource = $(this).find('img').attr('src');
    var img = '<img src="' + imgSource + '"/>';        
    $(this).parents('.btn-group').find('.dropdown-toggle').html(img + ' ' + selText + ' <span class="caret"></span>');
});




window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
mybutton = document.getElementById("myBtn");
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}




// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}

$(document).ready(function() {
  $("#cf_onclick").click(function() {
  $("#cf2 img.top").toggleClass("transparent");
});
});


//SLIDER IMAGES
var slideContent = document.getElementById('box');
var images = ['1','2','3','4','5','6'];
var i = 6;

function nextImage(){
    if(i < 6 )i++;
    else
        i = 1;

    slideContent.innerHTML = "<img src='../images/" + images[i-1] + ".jpg' />";
}

function prewImage(){
    if(i > 1)
        i--;
    else
        i = 6 ;

    slideContent.innerHTML = "<img src='../images/" + images[i-1] + ".jpg' />";
}

setInterval(nextImage,5000);
