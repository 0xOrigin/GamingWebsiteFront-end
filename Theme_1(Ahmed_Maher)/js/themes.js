 function getURL() {
   var x=(window.location.href);   
   return x;
 }
 
 function randomString() {
   var x=getURL();
   if(x=="signup.html")x="login.html";
   if((x.search("(Ahmed_Maher)"))!=-1)
   { 
     var f=(x.search("(Ahmed_Maher)"))+13;
     var result = x.substr(f);
     return result;
   }
   else if((x.search("(Ahmed_Ezzat)"))!=-1)
   {
     var f=x.search("(Ahmed_Ezzat)")+13;
     var result = x.substr(f);
     return result;
   }
   else if((x.search("(Ahmed_Mohamed)"))!=-1)
   {
     var f=x.search("(Ahmed_Mohamed)")+15;
     var result = x.substr(f);
     return result;
   }
   else if((x.search("(Ahmed_Alaa_Elden)"))!=-1)
   {
     var f=x.search("(Ahmed_Alaa_Elden)")+18;
     var result = x.substr(f);
     return result;
   }
   else if((x.search("(Ahmed_Adel)"))!=-1)
   {
     var f=x.search("(Ahmed_Adel)")+12;
     var result = x.substr(f);
     return result;
   }
  
 return -1;
 }
 
 $(window).on('load', function(){
   $('#theme1').attr('href','../Theme_1(Ahmed_Maher)/'+randomString());
   $('#theme2').attr('href','../Theme_2(Ahmed_Ezzat)/'+randomString());
   $('#theme3').attr('href','../Theme_3(Ahmed_Mohamed)/'+randomString());
   $('#theme4').attr('href','../Theme_4(Ahmed_Alaa_Elden)/'+randomString());
   $('#theme5').attr('href','../Theme_5(Ahmed_Adel)/'+randomString());
   });
 