let fname = document.getElementById("fname")
let lname = document.getElementById("lname")
let sign_email = document.getElementById("sign-email")
let sign_pass = document.getElementById("sign-pass")
let sign_btn = document.getElementById("sign-button")
let sign_login = document.getElementById("sign-login")
let temp = document.getElementById("temp")



sign_btn.addEventListener("click", function (e) {
    e.preventDefault()
    if (fname.value != "" && lname.value != "" && sign_email.value != "" && sign_pass.value != "") {
        localStorage.setItem("firstName", fname.value)
        localStorage.setItem("lastName", lname.value)
        localStorage.setItem("email", sign_email.value)
        localStorage.setItem("password", sign_pass.value)
        fname.value = ""
        lname.value = ""
        sign_email.value = ""
        sign_pass.value = ""
    }
    window.location = "login.html"
})