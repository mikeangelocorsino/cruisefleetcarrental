document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        validateForm();
    });

    function validateForm() {
        var isValid = true;

        // Reset previous error messages
        var errorMessages = document.querySelectorAll('.error');
        errorMessages.forEach(function (errorMessage) {
            errorMessage.innerHTML = '';
        });

        // Validate email
        var emailInput = document.querySelector('[name="email"]');
        if (!validateEmail(emailInput.value)) {
            displayError(emailInput, 'Invalid email address');
            isValid = false;
        }

        // Validate contact number
        var contactInput = document.querySelector('[name="tel"]');
        if (!validateContactNumber(contactInput.value)) {
            displayError(contactInput, 'Invalid contact number');
            isValid = false;
        }

        // Validate first name
        var firstNameInput = document.querySelector('[name="fname"]');
        if (!validateName(firstNameInput.value)) {
            displayError(firstNameInput, 'First name is required');
            isValid = false;
        }

        // Validate last name
        var lastNameInput = document.querySelector('[name="lname"]');
        if (!validateName(lastNameInput.value)) {
            displayError(lastNameInput, 'Last name is required');
            isValid = false;
        }

        // Validate complete address
        var addressInput = document.querySelector('[name="cadd"]');
        if (!validateAddress(addressInput.value)) {
            displayError(addressInput, 'Complete address is required');
            isValid = false;
        }

        // Validate zip code
        var zipCodeInput = document.querySelector('[name="zcode"]');
        if (!validateZipCode(zipCodeInput.value)) {
            displayError(zipCodeInput, 'Invalid zip code');
            isValid = false;
        }

        // Validate reserve unit type
        var unitTypeInput = document.querySelector('[name="ctype"]');
        if (!validateSelect(unitTypeInput.value)) {
            displayError(unitTypeInput, 'Please select a unit type');
            isValid = false;
        }

        // Validate reserve unit model
        var unitModelInput = document.querySelector('[name="cmodel"]');
        if (!validateSelect(unitModelInput.value)) {
            displayError(unitModelInput, 'Please select a unit model');
            isValid = false;
        }

        // Validate type of service
        var serviceInput = document.querySelector('[name="cservice"]');
        if (!validateSelect(serviceInput.value)) {
            displayError(serviceInput, 'Please select a type of service');
            isValid = false;
        }

        // Validate start date
        var startDateInput = document.querySelector('[name="cin"]');
        if (!validateDate(startDateInput.value)) {
            displayError(startDateInput, 'Invalid start date');
            isValid = false;
        }

        // Validate end date
        var endDateInput = document.querySelector('[name="cout"]');
        if (!validateDate(endDateInput.value)) {
            displayError(endDateInput, 'Invalid end date');
            isValid = false;
        }

        // Validate checkbox for terms and conditions
        var checkboxInput = document.querySelector('[name="cbox"]');
        if (!checkboxInput.checked) {
            displayError(checkboxInput, 'Please agree to the terms and conditions');
            isValid = false;
        }

        if (isValid) {
            // If all validations pass, save data to local storage and update the table
            saveData();
            updateTable();
        }
    }

    function validateEmail(email) {
        // Implement your email validation logic here
        // For simplicity, this example uses a basic regular expression
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validateContactNumber(contactNumber) {
        // Implement your contact number validation logic here
        // For simplicity, this example checks if it's a valid number
        return !isNaN(contactNumber);
    }

    function validateName(name) {
        // Implement your name validation logic here
        // For simplicity, this example checks if the name is not empty
        return name.trim() !== '';
    }

    function validateAddress(address) {
        // Implement your address validation logic here
        // For simplicity, this example checks if the address is not empty
        return address.trim() !== '';
    }

    function validateZipCode(zipCode) {
        // Implement your zip code validation logic here
        // For simplicity, this example checks if it's a valid zip code
        return /^\d{5}(-\d{4})?$/.test(zipCode);
    }

    function validateSelect(value) {
        // Implement your select field validation logic here
        // For simplicity, this example checks if a value is selected
        return value !== '';
    }

    function validateDate(date) {
        // Implement your date validation logic here
        // For simplicity, this example checks if it's a valid date
        return !isNaN(new Date(date).getTime());
    }

    function displayError(input, message) {
        var errorContainer = input.parentElement.querySelector('.error');
        errorContainer.innerHTML = message;
    }

    function saveData() {
        // Implement your logic to save data (e.g., to local storage) here
        // For simplicity, this example saves the form data to local storage
        var formData = {
            email: document.querySelector('[name="email"]').value,
            tel: document.querySelector('[name="tel"]').value,
            fname: document.querySelector('[name="fname"]').value,
            lname: document.querySelector('[name="lname"]').value,
            cadd: document.querySelector('[name="cadd"]').value,
            zcode: document.querySelector('[name="zcode"]').value,
            ctype: document.querySelector('[name="ctype"]').value,
            cmodel: document.querySelector('[name="cmodel"]').value,
            cservice: document.querySelector('[name="cservice"]').value,
            cin: document.querySelector('[name="cin"]').value,
            cout: document.querySelector('[name="cout"]').value,
        };

        // Save the form data to local storage
        localStorage.setItem('formData', JSON.stringify(formData));
    }

    function updateTable() {
        // Retrieve the form data from local storage
        var formData = JSON.parse(localStorage.getItem('formData'));

        // Update the table with the booked car details
        var tableBody = document.querySelector('tbody');
        var newRow = tableBody.insertRow();
        newRow.innerHTML = `
            <td>${tableBody.children.length}</td>
            <td>${formData.ctype}</td>
            <td>${formData.cmodel}</td>
            <td>${formData.cin}</td>
            <td>${formData.cout}</td>
        `;
    }
});

    var chatbox = document.getElementById('fb-customer-chat');
    chatbox.setAttribute("page_id", "197824680074538");
    chatbox.setAttribute("attribution", "biz_inbox");



    window.fbAsyncInit = function() {
      FB.init({
        xfbml            : true,
        version          : 'v18.0'
      });
    };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));



