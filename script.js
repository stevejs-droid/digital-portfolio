function login() {
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let error = document.getElementById("error-msg");

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phonePattern = /^[6-9]\d{9}$/;

    if (!emailPattern.test(email)) {
        error.innerText = "Invalid Email!";
        return;
    }

    if (!phonePattern.test(phone)) {
        error.innerText = "Invalid Phone Number!";
        return;
    }

    // Store data temporarily
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);

    // Redirect
    window.location.href = "portfolio.html";
}