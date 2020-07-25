/*
function validateForm()  {
  
    var email = $('#email').val();
    var phone = $('#phone').val();
    var textarea = $('#textarea').val();
    var name = $('#name').val();
    

    if (email.length < 1) {
        document.getElementById('email').style.boxShadow=" 0 14px 28px rgba(92, 7, 7, 0.5),0 10px 10px rgba(92, 7, 7, 0.5)";
    } else {
      var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
      var validEmail = regEx.test(email);
      if (!validEmail) {
        document.getElementById('email').style.boxShadow="0 14px 28px rgba(65, 64, 64,0.2),0 10px 10px rgba(65, 64, 64,0.2)";
      }
    }
    

    if (phone.length < 1) {
        document.getElementById('phone').style.boxShadow=" 0 14px 28px rgba(92, 7, 7, 0.5),0 10px 10px rgba(92, 7, 7, 0.5)";
    }
    else{
        document.getElementById('phone').style.boxShadow="0 14px 28px rgba(65, 64, 64,0.2),0 10px 10px rgba(65, 64, 64,0.2)";
    }


      
    if (textarea.length < 1) {
        document.getElementById('textarea').style.boxShadow=" 0 14px 28px rgba(92, 7, 7, 0.5),0 10px 10px rgba(92, 7, 7, 0.5)";
    }
    else{
        document.getElementById('textarea').style.boxShadow="0 14px 28px rgba(65, 64, 64,0.2),0 10px 10px rgba(65, 64, 64,0.2)";
    }

    if (name.length < 1) {
        document.getElementById('name').style.boxShadow=" 0 14px 28px rgba(92, 7, 7, 0.5),0 10px 10px rgba(92, 7, 7, 0.5)";
    }
    else{
        document.getElementById('name').style.boxShadow="0 14px 28px rgba(65, 64, 64,0.2),0 10px 10px rgba(65, 64, 64,0.2)";
    }

});
}
*/


function validateForm() {

    var email = $('#email').val();
    var phone = $('#phone').val();
    var textarea = $('#textarea').val();
    var name = $('#name').val();
    var f=true;

    if (email.length < 1) {
        document.getElementById('email').style.boxShadow=" 0 14px 28px rgba(92, 7, 7, 0.5),0 10px 10px rgba(92, 7, 7, 0.5)";
        f=false;
    } else {
      var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
      var validEmail = regEx.test(email);
      if (!validEmail) {
        document.getElementById('email').style.boxShadow="0 14px 28px rgba(65, 64, 64,0.2),0 10px 10px rgba(65, 64, 64,0.2)";
      }
    }
    
    
    if (phone.length < 1) {
        document.getElementById('phone').style.boxShadow=" 0 14px 28px rgba(92, 7, 7, 0.5),0 10px 10px rgba(92, 7, 7, 0.5)";
        f=false;
    }
    else{
        document.getElementById('phone').style.boxShadow="0 14px 28px rgba(65, 64, 64,0.2),0 10px 10px rgba(65, 64, 64,0.2)";
    }


      
    if (textarea.length < 1) {
        document.getElementById('textarea').style.boxShadow=" 0 14px 28px rgba(92, 7, 7, 0.5),0 10px 10px rgba(92, 7, 7, 0.5)";
        f=false;
    }
    else{
        document.getElementById('textarea').style.boxShadow="0 14px 28px rgba(65, 64, 64,0.2),0 10px 10px rgba(65, 64, 64,0.2)";
    }

    if (name.length < 1) {
        document.getElementById('name').style.boxShadow=" 0 14px 28px rgba(92, 7, 7, 0.5),0 10px 10px rgba(92, 7, 7, 0.5)";
        f=false;
    }
    else{
        document.getElementById('name').style.boxShadow="0 14px 28px rgba(65, 64, 64,0.2),0 10px 10px rgba(65, 64, 64,0.2)";
    }
    return f;


  }