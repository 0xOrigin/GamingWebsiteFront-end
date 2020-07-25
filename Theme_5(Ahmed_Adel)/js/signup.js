$(document).ready(function(){

    var selectDays = document.getElementById("select-controls-days"),
        selectMonths = document.getElementById("select-controls-months"),
        selectYears = document.getElementById("select-controls-years"),
        months = ['January','February','March','April','May','June','July','August','September','October','November','December'],
        i;

    function fillSelect(){
        for(i=1;i<=31;i++){
            var option = document.createElement("option");
            option.text = i;
            option.value = i;
            selectDays.add(option);
        }

        for(i=0;i<months.length;i++){
            var option = document.createElement("option");
            option.text = months[i];
            option.value = months[i];
            selectMonths.add(option);
        }

        for(i=1960;i<=2007;i++){
            var option = document.createElement("option");
            option.text = i;
            option.value = i;
            selectYears.add(option);
        }    
    }

/*                            JQ animations                           */
    $('#signup-form-btn').click(function(){
        $('.signup-separator').fadeOut(100);
        $('.OR').fadeOut();
        $(this).fadeOut(200);
        $('.signup-right').fadeOut(200);
        $('.signup-left').delay(200).css({transform: 'rotateY(360deg)'});
    });

    $('.back-btn').click(function(){
        $('.signup-left').css({transform: 'none'});
        $('.OR').delay(200).fadeIn(100);
        $('.signup-separator').delay(200).fadeIn(100);
        $('#signup-form-btn').fadeIn(200);
        $('.signup-right').fadeIn();
    });

    fillSelect();
});