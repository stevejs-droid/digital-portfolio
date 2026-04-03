function login() {
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let errorMsg = document.getElementById("error-msg");

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phonePattern = /^[6-9]\d{9}$/;

    if (!emailPattern.test(email)) {
        errorMsg.innerText = "Please enter a valid email address.";
        return;
    }

    if (!phonePattern.test(phone)) {
        errorMsg.innerText = "Please enter a valid 10-digit phone number.";
        return;
    }

    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);

    window.location.href = "portfolio.html";
}

if (window.location.pathname.includes("portfolio.html")) {
    let savedEmail = localStorage.getItem("email");
    let savedPhone = localStorage.getItem("phone");

    if (!savedEmail || !savedPhone) {
        window.location.href = "index.html";
    } else {
        document.getElementById("user-email").innerText = "Email: " + savedEmail;
        document.getElementById("user-phone").innerText = "Phone: " + savedPhone;
    }
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function logout() {
    localStorage.removeItem("email");
    localStorage.removeItem("phone");
    window.location.href = "index.html";
}
