document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const nameInput = document.getElementById('name');
    const passwordInput = document.getElementById('password');
    const togglePasswordButton = document.getElementById('togglePassword');

    // Name validation
    nameInput.addEventListener('input', function () {
        if (/\d/.test(nameInput.value)) {
            nameInput.setCustomValidity('Name cannot contain numbers.');
        } else {
            nameInput.setCustomValidity('');
        }
    });

    // Toggle password visibility
    togglePasswordButton.addEventListener('mousedown', function () {
        passwordInput.type = 'text';
    });
    togglePasswordButton.addEventListener('mouseup', function () {
        passwordInput.type = 'password';
    });
    togglePasswordButton.addEventListener('mouseleave', function () {
        passwordInput.type = 'password';
    });

    // Form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission for validation demonstration

        if (!form.checkValidity()) {
            alert('Please fill out the form correctly.');
        } else {
            alert('Registration successful!');
            form.reset();
        }
    });
});
