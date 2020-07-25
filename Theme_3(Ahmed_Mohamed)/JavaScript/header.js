/*const navSlide=()=>{
    const divisions = document.querySelector('.divisions');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    divisions.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
    });
    navLinks.forEach((link,))  //For each link We will run a function
}
navSlide();*/
const navOthers = document.getElementById("nav-others");
const themeOthers = document.getElementById("themes-others");
function nav_others()
{
    navOthers.style.transform="translateY(0px)";
    navOthers.style.transition="1s";
    navOthers.style.visibility="visible";
    document.getElementById("nav-others-btn").style.display="none"; 
    document.getElementById("nav-exit-btn").style.display="inline";
    document.getElementById("nav-exit-btn").style.top="14px"
}
function nav_exit()
{
    navOthers.style.transition=".5s";
    navOthers.style.transform="translateY(-150px)";
    document.getElementById("nav-exit-btn").style.display="none";
    document.getElementById("nav-others-btn").style.display="inline";
}
function themes_others()
{
    themeOthers.style.transform="translateY(0px)";
    themeOthers.style.transition="1s";
    themeOthers.style.visibility="visible";
    document.getElementById("themes-btn").style.display="none"; 
    document.getElementById("themes-exit-btn").style.display="inline";
    document.getElementById("themes-exit-btn").style.top="14px";
}
function themes_exit()
{
    themeOthers.style.transition=".5s";
    themeOthers.style.transform="translateY(-150px)";
    document.getElementById("themes-exit-btn").style.display="none";
    document.getElementById("themes-btn").style.display="inline";
}