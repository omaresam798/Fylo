
let login_email = document.getElementById("login-email")
let login_pass = document.getElementById("login-pass")
let login_btn = document.getElementById("login-button")
let sign_login = document.getElementById("sign-login")
let temp = document.getElementById("temp")

login_btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (login_email.value === localStorage.getItem("email") && login_pass.value === localStorage.getItem("password")) {
        location = "index.html"
        
    } else {
        alert("Wrong password Or Email")
    }
})