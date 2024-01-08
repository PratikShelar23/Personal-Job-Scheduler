document.addEventListener("DOMContentLoaded", function() {
    // Sample user credentials for demonstration purposes
    const sampleUser = {
        email: "pratik@gmail.com",
        password: "12345678"
    };

    const loginForm = document.getElementById("loginForm");
    const emailInput = document.querySelector(".email-input");
    const passwordInput = document.querySelector(".password-input");
    const loginResult = document.getElementById("loginResult");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = emailInput.value;
        const password = passwordInput.value;

        if (email === sampleUser.email && password === sampleUser.password) {
            loginResult.innerHTML = "Login successful. Redirecting...";
            // Redirect the user to a new page (change the URL accordingly).
            window.location.href = "{% url 'home' %}";
        } else {
            loginResult.innerHTML = "Login failed. Please check your email and password.";
        }
    });
});
