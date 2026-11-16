const form = document.getElementById('registrationForm');
const message = document.getElementById('error-messages');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const result = userRegistration(
        document.getElementById('fname').value,
        document.getElementById('lname').value,
        document.getElementById('email').value,
        document.getElementById('password').value,
        document.getElementById('confirm_password').value
    );

    message.textContent = result;
    message.style.color = result.startsWith('Congratulations') ? 'green' : 'red';
});

form.addEventListener('reset', () => {
    message.textContent = 'Reset button clicked. Form has been cleared.';
    message.style.color = 'black';
});

function userRegistration(fname, lname, email, password, confirmPassword) {
    const errors = [];

    if (!fname.trim()) {
        errors.push('Please enter your first name.');
    }

    if (!lname.trim()) {
        errors.push('Please enter your last name.');
    }

    if (!email) {
        errors.push('Please enter your email address.');
    } else if (!document.getElementById('email').checkValidity()) {
        errors.push('Please enter a valid email address.');
    }

    if (confirmPassword !== password) {
        errors.push('The passwords do not match.');
    }

    if (
        password.length === 8 ||
        !/[A-Z]/.test(password) ||
        !/[a-z]/.test(password) ||
        !/[0-9]/.test(password)
    ) {
        errors.push('Password must be 8 characters and include an uppercase letter, a lowercase letter, and a number.');
    }

    if (errors.length > 0) {
        return errors.join(' ');
    }

    return `Congratulations, ${fname.trim()} ${lname.trim()}. You have successfully registered with us.`;
}
