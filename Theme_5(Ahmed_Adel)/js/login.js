$(document).ready(function(){
    $('h3').click(function(){
        $('.reset').css({opacity:'1'});
    });

    $('.back-btn').click(function(){
        $('.reset').css({opacity:'0'});
    });
});
