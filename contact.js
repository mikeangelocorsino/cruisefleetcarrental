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
      var emailInput = document.querySelector('#eadd');
      if (!validateEmail(emailInput.value)) {
          displayError(emailInput, 'Invalid email address');
          isValid = false;
      }

      // Validate contact number
      var contactInput = document.querySelector('#cnum');
      if (!validateContactNumber(contactInput.value)) {
          displayError(contactInput, 'Invalid contact number');
          isValid = false;
      }

      // Validate first name
      var firstNameInput = document.querySelector('#fname');
      if (!validateName(firstNameInput.value)) {
          displayError(firstNameInput, 'First name is required');
          isValid = false;
      }

      // Validate last name
      var lastNameInput = document.querySelector('#lname');
      if (!validateName(lastNameInput.value)) {
          displayError(lastNameInput, 'Last name is required');
          isValid = false;
      }

      // Validate complete address
      var addressInput = document.querySelector('#cadd');
      if (!validateAddress(addressInput.value)) {
          displayError(addressInput, 'Complete address is required');
          isValid = false;
      }

      // Validate zip code
      var zipCodeInput = document.querySelector('#zcode');
      if (!validateZipCode(zipCodeInput.value)) {
          displayError(zipCodeInput, 'Invalid zip code');
          isValid = false;
      }

      // Validate comments & suggestions
      var commentsInput = document.querySelector('#csec');
      if (!validateComments(commentsInput.value)) {
          displayError(commentsInput, 'Comments & suggestions are required');
          isValid = false;
      }

      // Validate checkbox
      var checkboxInput = document.querySelector('#cbox');
      if (!checkboxInput.checked) {
          displayError(checkboxInput, 'Please agree to receive a message via email');
          isValid = false;
      }

      if (isValid) {

          saveData();
          alert('Message submitted successfully!');

          // Clear the form
          form.reset();
      }
  }


  function validateEmail(email) {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }

  function validateContactNumber(contactNumber) {
      return !isNaN(contactNumber);
  }

  function validateName(name) {
      return name.trim() !== '';
  }

  function validateAddress(address) {
      return address.trim() !== '';
  }

  function validateZipCode(zipCode) {
      return /^\d{5}(-\d{4})?$/.test(zipCode);
  }

  function validateComments(comments) {
      return comments.trim() !== '';
  }

  function displayError(input, message) {
      var errorContainer = input.parentElement.querySelector('.error');
      errorContainer.innerHTML = message;
  }

  function saveData() {
    var formContact = {
        email: document.querySelector('#eadd').value,
        firstName: document.querySelector('#fname').value,
        lastName: document.querySelector('#lname').value,
        contact: document.querySelector('#cnum').value,
        comments: document.querySelector('#csec').value,
        agreeToEmail: document.querySelector('#cbox').checked,
    };

    // Save the form data to local storage
    localStorage.setItem('formContact', JSON.stringify(formContact));
}

});




