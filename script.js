document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const submitBtn = document.getElementById('submitBtn');
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    const validateUsername = () => {
        if (username.value.length < 3) {
            usernameError.textContent = "Username must be at least 3 characters.";
            return false;
        } else {
            usernameError.textContent = "";
            return true;
        }
    };

    const validateEmail = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            emailError.textContent = "Enter a valid email.";
            return false;
        } else {
            emailError.textContent = "";
            return true;
        }
    };

    const validatePassword = () => {
        if (password.value.length < 6) {
            passwordError.textContent = "Password must be at least 6 characters.";
            return false;
        } else {
            passwordError.textContent = "";
            return true;
        }
    };

    const validateForm = () => {
        const isUsernameValid = validateUsername();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        
        submitBtn.disabled = !(isUsernameValid && isEmailValid && isPasswordValid);
    };

    username.addEventListener('input', validateForm);
    email.addEventListener('input', validateForm);
    password.addEventListener('input', validateForm);

    form.addEventListener('submit', (event) => {
        validateForm();
        if (!submitBtn.disabled) {
            event.preventDefault();
            // Redirect to the next page after successful validation
            window.location.href = "indexseminar.html"; // Replace with your desired URL
        } else {
            event.preventDefault();
        }
    });
});
