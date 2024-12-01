let email = document.getElementById("email")
let btn = document.getElementById("email-btn")
let login = document.getElementById("login")
let sign = document.getElementById("sign")

function check() {
    if (email.value.trim() === "") {
        alert("Fill the email field first");
    } else {
        let at = -1;
        for (let i = 0; i < email.value.length; i++) {
            if (email.value[i] === '@') {
                at = i;
                break;
            }
        }
        if (at !== -1) {
            if (email.value.substring(at).includes(".com")) {
                confirm("Valid Email");
                email.value = ""
            } else {
                alert("Wrong Email");
            }
        } else {
            alert("Wrong Email: Missing '@'");
        }
    }
}

function log() {
    setTimeout(() => { // Corrected "settimeout" to "setTimeout"
        window.location = "login.html";
    }, 1500);
}

function sig() {
    setTimeout(() => { // Corrected "settimeout" to "setTimeout"
        window.location = "sign.html";
    }, 1500);
}

window.onload = () => {
    // Reference elements
    const signLogin = document.querySelector("#sign-login");
    const temp = document.querySelector("#temp");
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    if (firstName) {
        signLogin.classList.add("hidden");
        temp.innerHTML = `${firstName} ${lastName || ""}`.trim();
        temp.style.fontSize = "20px";
        temp.style.color = "#ff4242"
        temp.style.fontWeight = "bold"
        temp.style.letterSpacing = "1px"
    } else {
        signLogin.classList.remove("hidden");
        temp.style.display = "none"
    }
};
