
//function saveData(){
   // event.preventDefault();

//let emailAddress = document.getElementById("eadd").value;
//let contactNumber = document.getElementById("cnum").value;
//let firstName = document.getElementById("fname").value;
//let lastName = document.getElementById("lname").value;
//let completeAddress = document.getElementById("cadd").value;
//let zipCode = document.getElementById("zcode").value;
//let vehicleType = document.getElementById("ctype").value;
//let startDate = document.getElementById("cin").value;
//let endDate = document.getElementById("cout").value;

//localStorage.setItem("eadd",emailAddress );}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
