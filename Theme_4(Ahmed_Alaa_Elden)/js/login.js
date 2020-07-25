$(document).ready(function(){
    $('h4').click(function(){
        $('.login-left').css({transform: 'rotatex(-180deg)'});
    });
    $('.back .fa-arrow-down').click(function(){
        $('.login-left').css({transform: 'rotatex(0deg)'});
    });
});