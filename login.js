// Additional security checks for email and password
const isValidEmail = email => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
};

const isValidPassword = password => {
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
const validateInputs = (username, password) => {
    clearSuccess();

    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');
    } else if (!isValidPassword(passwordValue)) {
        setError(
            password,
            'Password should be at least 8 characters and contain at least one uppercase letter, one digit, and one special character.'
        );
    } else {
        setSuccess(password);
        return true; // Validation successful
    }

    return false; // Validation failed
};

// Function to save data
function saveData() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");

    if (validateInputs(username, password)) {
        let usernameValue = username.value.trim();
        let passwordValue = password.value.trim();

        const adminCredentials = {
            username: 'mike',
            password: 'D@rkcheetah013'
        };

        if (usernameValue === adminCredentials.username && passwordValue === adminCredentials.password) {
            localStorage.setItem("username", adminCredentials.username);
            localStorage.setItem("email", '');
            window.location.href = "admin.html";
            return;
        }

        let userRecords = JSON.parse(localStorage.getItem("users")) || [];

        let loggedInUser = userRecords.find(
            (record) => record.username === usernameValue && record.password === passwordValue
        );

        if (loggedInUser) {
            localStorage.setItem("username", loggedInUser.username);
            localStorage.setItem("email", loggedInUser.email);
            window.location.href = "user.html";
        } else {
            alert("Login failed. Incorrect username or password.");
        }
    }
}


// Event listener for form submission
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    saveData(); 
});

document.getElementById('signup_btn').addEventListener('click', function () {

    window.location.href = 'signup.html';
});
