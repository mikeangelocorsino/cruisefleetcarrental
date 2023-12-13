// Additional security checks for email and password
const isValidEmail = email => {
    // Use a more secure regex for email validation
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
};

const isValidPassword = password => {
    // Enhance password security requirements
    const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&^#])[A-Za-z\d@$!%*?&^#]{8,}$/;
    return pattern.test(String(password));
};

// Function to set error message and class
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

// Function to clear success messages
const clearSuccess = () => {
    document.querySelectorAll('.success').forEach(el => el.classList.remove('success'));
};

// Function to set success class
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

// Function to validate inputs
const validateInputs = (username, email, password, password2) => {
    clearSuccess();

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 || !isValidPassword(passwordValue)) {
        setError(
            password,
            'Password should be at least 8 characters and contain at least one uppercase letter, one digit, and one special character.'
        );
    } else {
        setSuccess(password);
    }

    if (password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords don't match");
    } else {
        setSuccess(password2);

        window.location.href = 'login.html'; 
        return true;
    }

    return false;
};


// Function to save data
const saveData = () => {
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const password2Input = document.getElementById('password2');

    if (validateInputs(usernameInput, emailInput, passwordInput, password2Input)) {
        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        let userRecords = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

        if (userRecords.some(record => record.email === email)) {
            alert('Email already used proceed to log In');
        } else {
            userRecords.push({
                username: username,
                email: email,
                password: password,
            });
            localStorage.setItem('users', JSON.stringify(userRecords));
        }
    }
};

// Event listener for form submission
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    saveData(); 
});

document.getElementById('login_btn').addEventListener('click', function () {
    window.location.href = 'login.html'; 
});
