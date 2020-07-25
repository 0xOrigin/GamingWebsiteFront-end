const login_front = document.getElementById("login-front");
const login_back = document.getElementById("login-back");
const login_box = document.getElementById("login-box");
const main_id = document.getElementById("main-id");
function reset_password()
{
    login_front.style.transform="translate(-400px)"
    login_front.style.transition=".5s";
    login_back.style.transform="translate(0px)";
    login_back.style.transition=".5s";
    login_box.style.height="400px";
    login_box.style.transition=".6s";
    main_id.style.minHeight="calc(100vh - 48.79px - 100px)"
    main_id.style.transition=".6s";
}
function login_again()
{
    login_front.style.transform="translate(0)"
    login_front.style.transition=".5s";
    login_back.style.transform="translate(400px)";
    login_back.style.transition=".5s";
    login_box.style.height="450px";
    login_box.style.transition=".6s";
    main_id.style.minHeight="calc(110vh - 48.79px - 100px)"
    main_id.style.transition=".6s";
}