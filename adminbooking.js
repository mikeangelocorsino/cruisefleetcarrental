function toggleTable(tableId) {
    // Hide all tables
    var allTables = document.querySelectorAll('.table-container');
    allTables.forEach(function (table) {
        table.classList.add('hidden');
    });

    // Show the selected table
    var selectedTable = document.getElementById(tableId);
    if (selectedTable) {
        selectedTable.classList.remove('hidden');
        updateTable(tableId);
    }
}

function updateTable(tableId) {
    // Retrieve the appropriate data from local storage based on the tableId
    var storageKey;
    switch (tableId) {
        case 'userTable':
            storageKey = 'users';
            break;
        case 'bookingTable':
            storageKey = 'formData';
            break;
        case 'emailTable':
            storageKey = 'formContact';
            break;
        default:
            console.error('Invalid tableId:', tableId);
            return;
    }

    var data = JSON.parse(localStorage.getItem(storageKey));

    // Get the appropriate table body
    var tableBody = document.getElementById(tableId + 'Body');
    // Clear existing rows
    tableBody.innerHTML = '';

    // Check if data is not null and is an object or array
    if (data !== null && (typeof data === 'object' || Array.isArray(data))) {
        // Convert the object to an array if needed
        data = Array.isArray(data) ? data : [data];

        // Check if data is an array and the table body exists
        if (Array.isArray(data) && tableBody) {
            // Iterate through the data and populate the table
            data.forEach(function (item, index) {
                var newRow = tableBody.insertRow();
                // Populate the cells based on the table
                switch (tableId) {
                    case 'userTable':
                        newRow.insertCell(0).innerText = index + 1;
                        newRow.insertCell(1).innerText = item.fullName;
                        newRow.insertCell(2).innerText = item.username;
                        newRow.insertCell(3).innerText = item.email;
                        newRow.insertCell(4).innerHTML = '<button class="btn btn-secondary" onclick="editUser(' + index + ')">Edit</button>' +
                                                         '<button onclick="deleteUser(' + index + ')">Delete</button>';
                        break;
                    case 'bookingTable':
                        newRow.insertCell(0).innerText = index + 1;
                        newRow.insertCell(1).innerText = item.fname + ' ' + item.lname;
                        newRow.insertCell(2).innerText = item.tel;
                        newRow.insertCell(3).innerText = item.email;
                        newRow.insertCell(4).innerText = item.ctype;
                        newRow.insertCell(5).innerText = item.cmodel;
                        newRow.insertCell(6).innerText = item.cin;
                        newRow.insertCell(7).innerText = item.cout;
                        newRow.insertCell(8).innerHTML = '<button onclick="deleteBooking(' + index + ')">Delete</button>';
                        break;
                        case 'emailTable':
                            newRow.insertCell(0).innerText = index + 1;
                            newRow.insertCell(1).innerText = item.firstName;
                            newRow.insertCell(2).innerText = item.lastName;
                            newRow.insertCell(3).innerText = item.email;
                            newRow.insertCell(4).innerText = item.comments;
                            newRow.insertCell(5).innerHTML = '<button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#replyModal" onclick="prepareReply(' + index + ')">Reply</button>'
                             +
                                                              '<button onclick="deleteBooking(' + index + ')">Delete</button>';
                            break;
                    default:
                        break;
                }
            });
        } else {
            console.error('Invalid data structure:', data);
        }
    } else {
        console.error('Invalid or missing data:', data);
    }
}

// Edit and delete functions for users
function editUser(index) {
    var users = JSON.parse(localStorage.getItem('users')) || [];
    var editedUser = users[index];
    
    // Assume you have a form with fields for editing user data
    var newName = prompt('Enter new name:', editedUser.fullName);
    var newUsername = prompt('Enter new username:', editedUser.username);
    var newEmail = prompt('Enter new email:', editedUser.email);

    // Update the user data
    editedUser.fullName = newName;
    editedUser.username = newUsername;
    editedUser.email = newEmail;

    // Save the updated data back to local storage
    localStorage.setItem('users', JSON.stringify(users));

    // Refresh the table after editing
    toggleTable('userTable');
}

function deleteUser(index) {
    var users = JSON.parse(localStorage.getItem('users')) || [];
    var deletedUser = users[index];

    // Confirm deletion
    if (confirm('Are you sure you want to delete this user?')) {
        // Remove the user from the array
        users.splice(index, 1);
        
        // Save the updated data back to local storage
        localStorage.setItem('users', JSON.stringify(users));

        // Refresh the table after deletion
        toggleTable('userTable');
    }
}

function deleteBooking(index) {
    var bookings = JSON.parse(localStorage.getItem('formData')) || [];
    console.log('Original Bookings:', bookings);

    var deletedBooking = bookings[index];

    // Confirm deletion
    if (confirm('Are you sure you want to delete this booking?')) {
        // Check if bookings is an array
        if (Array.isArray(bookings)) {
            // Remove the booking from the array
            bookings.splice(index, 1);
            console.log('Bookings after deletion:', bookings);

            // Save the updated data back to local storage
            localStorage.setItem('formData', JSON.stringify(bookings));

            // Refresh the table after deletion
            toggleTable('bookingTable');
        } else if (typeof bookings === 'object' && !Array.isArray(bookings)) {
            // If bookings is an object, convert it to an array
            bookings = [bookings];

            // Remove the booking from the array
            bookings.splice(index, 1);
            console.log('Bookings after deletion:', bookings);

            // Save the updated data back to local storage
            localStorage.setItem('formData', JSON.stringify(bookings));

            // Refresh the table after deletion
            toggleTable('bookingTable');
        } else {
            console.error('Invalid data structure for bookings:', bookings);
        }
    }
}
function deleteMessage(index) {
    var users = JSON.parse(localStorage.getItem('formContact')) || [];
    var deletedUser = users[index];

    // Confirm deletion
    if (confirm('Are you sure you want to delete this message?')) {
        // Remove the user from the array
        users.splice(index, 1);
        
        // Save the updated data back to local storage
        localStorage.setItem('formContact', JSON.stringify(users));

        // Refresh the table after deletion
        toggleTable('emailTable');
    }
}

function sendReply() {
    // Get the content of the reply textarea
    var replyContent = document.getElementById('replyTextArea').value;

    // Retrieve name and email from localStorage
    var recipientName = localStorage.getItem('formContactName');
    var recipientEmail = localStorage.getItem('formContactEmail');

    // Perform any action you need with the reply content, name, and email
    console.log(`Reply to ${recipientName} (${recipientEmail}):\n${replyContent}`);

    // Clear the reply textarea
    document.getElementById('replyTextArea').value = '';

    // Close the modal
    $('#replyModal').modal('hide');
}

function prepareReply(index) {
    // Get the data for the selected row based on the index
    var rowData = emailData[index];
    
    // Set the content of the reply textarea with relevant information
    var replyTextArea = document.getElementById('replyTextArea');

    if (replyTextArea) {
        replyTextArea.value = `Replying to ${rowData.firstName} ${rowData.lastName} (${rowData.email}):\n\n`;
        replyTextArea.focus();

        // Store name and email in localStorage
        localStorage.setItem('formContactName', rowData.firstName + ' ' + rowData.lastName);
        localStorage.setItem('formContactEmail', rowData.email);
    } else {
        console.error('Textarea element not found.');
    }
}







