const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const resetButton = document.getElementById('reset');
const container = document.getElementById('container');
signUpButton.addEventListener('click', () => {
	container.classList.add("up-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("up-panel-active");
});
resetButton.addEventListener('click', () => {
	container.classList.add("left-panel-active");
});
signInButton.addEventListener('click', () => {
	container.classList.remove("left-panel-active");
});
signUpButton.addEventListener('click', () => {
	container.classList.remove("left-panel-active");
});

$(document).ready(function(){
  $('header').loadHTML('header.html'); 
  $('footer').loadHTML('footer.html'); 
});


function validateForm() {

	var name = $('#name').val();
	var email = $('#email').val();
	var password = $('#password').val();

	if(name.length < 3 && name.length >= 1){
	   
		swal("The minimum length of name is 3 characters");
	  
		return false;
	}

	if (password.length < 8 && password.length  >1 ) {
	
		swal("The minimum length of password is 8 characters");
		return false;
	}


  }

$(document).ready(function() {

	$('#signupForm').submit(function(e) {
		e.preventDefault();
		var name = $('#name').val();
		var username = $('#username').val();
		var email = $('#email').val();
		var password = $('#password').val();
		var cpassword = $('#confirmpassword').val();
	
		$(".error").remove();
	
		 if (name.length < 3) {
			document.getElementById('name').style.boxShadow=" 0 14px 28px rgba(92, 7, 7, 0.5),0 10px 10px rgba(92, 7, 7, 0.5)";
		   }
		else{
			document.getElementById('name').style.boxShadow="0 14px 28px rgba(65, 64, 64,0.2),0 10px 10px rgba(65, 64, 64,0.2)";
		}


		if (username.length < 1) {
			document.getElementById('username').style.boxShadow=" 0 14px 28px rgba(92, 7, 7, 0.5),0 10px 10px rgba(92, 7, 7, 0.5)";
   
		   }
		   else{
			   document.getElementById('username').style.boxShadow="0 14px 28px rgba(65, 64, 64,0.2),0 10px 10px rgba(65, 64, 64,0.2)";
		   }


		if (email.length < 1) {
			document.getElementById('email').style.boxShadow=" 0 14px 28px rgba(92, 7, 7, 0.5),0 10px 10px rgba(92, 7, 7, 0.5)";
		} else {
		  var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
		  var validEmail = regEx.test(email);
		  if (!validEmail) {
			document.getElementById('email').style.boxShadow="0 14px 28px rgba(65, 64, 64,0.2),0 10px 10px rgba(65, 64, 64,0.2)";
		  }
		}


		if (password.length < 8) {
			document.getElementById('password').style.boxShadow=" 0 14px 28px rgba(92, 7, 7, 0.5),0 10px 10px rgba(92, 7, 7, 0.5)";
		}

		
		else{
			document.getElementById('password').style.boxShadow="0 14px 28px rgba(65, 64, 64,0.2),0 10px 10px rgba(65, 64, 64,0.2)";
		}


		if (cpassword!=password || cpassword.length<1) {
			document.getElementById('confirmpassword').style.boxShadow=" 0 14px 28px rgba(92, 7, 7, 0.5),0 10px 10px rgba(92, 7, 7, 0.5)";
		}
		else{
			document.getElementById('confirmpassword').style.boxShadow="0 14px 28px rgba(65, 64, 64,0.2),0 10px 10px rgba(65, 64, 64,0.2)";
		}
	  });
	

	  $('#signinForm').submit(function(e) {
		e.preventDefault();
		var email = $('#signinemail').val();
		var password = $('#signinpassword').val();
		$(".error").remove();
		
		if (email.length < 1) {
			document.getElementById('signinemail').style.boxShadow=" 0 14px 28px rgba(92, 7, 7, 0.5),0 10px 10px rgba(92, 7, 7, 0.5)";
		} else {
		  var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
		  var validEmail = regEx.test(email);
		  if (!validEmail) {
			document.getElementById('signinemail').style.boxShadow="0 14px 28px rgba(65, 64, 64,0.2),0 10px 10px rgba(65, 64, 64,0.2)";
		  }
		}


		if (password.length < 1) {
			document.getElementById('signinpassword').style.boxShadow=" 0 14px 28px rgba(92, 7, 7, 0.5),0 10px 10px rgba(92, 7, 7, 0.5)";
		}

		
		else{
			document.getElementById('signinpassword').style.boxShadow="0 14px 28px rgba(65, 64, 64,0.2),0 10px 10px rgba(65, 64, 64,0.2)";
		}

	});

	$('#sendForm').submit(function(e) {
		e.preventDefault();
		var email = $('#sendpasword').val();
		$(".error").remove();
		
		if (email.length < 1) {
			document.getElementById('sendpasword').style.boxShadow=" 0 14px 28px rgba(92, 7, 7, 0.5),0 10px 10px rgba(92, 7, 7, 0.5)";
		} else {
		  var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
		  var validEmail = regEx.test(email);
		  if (!validEmail) {
			document.getElementById('sendpasword').style.boxShadow="0 14px 28px rgba(65, 64, 64,0.2),0 10px 10px rgba(65, 64, 64,0.2)";
		  }
		}

	
	});

});
	
	