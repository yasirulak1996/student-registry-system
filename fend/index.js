document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:5000/getAll')
    .then(response => response.json())
    .then(data => loadHTMLTable(data['data']));
    
});



const addBtn = document.querySelector('#myjoin');

addBtn.onclick = function () {
    // Get input values from the respective input fields
    const nameInput = document.querySelector('#name_of_the_student');
    const birthdayInput = document.querySelector('#my_id');
    const sexInput = document.querySelector('input[name="sex"]:checked'); // Radio button input for sex
    const addressInput = document.querySelector('#adress');
    const phoneInput = document.querySelector('#phone_number');

    // Extract values
    const name = nameInput.value;
    const birthday = birthdayInput.value;
    const sex = sexInput ? sexInput.value : ''; // Get the value of the selected radio button, if any
    const address = addressInput.value;
    const phone_number = phoneInput.value;

    // Clear input fields after retrieving values
    nameInput.value = "";
    birthdayInput.value = "";
    if (sexInput) sexInput.checked = false; // Uncheck the radio button if selected
    addressInput.value = "";
    phoneInput.value = "";

    // Send the data using fetch
    fetch('http://localhost:5000/insert', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ name: name, birthday: birthday, sex: sex, address: address, phone_number: phone_number }) // Send all the fields
    })
    .then(response => response.json())
    .then(data => insertRowIntoTable(data['data']))
    .catch(err => console.error('Error:', err));
  }
  function insertRowIntoTable(data) {
    console.log(data);
    const table = document.querySelector('table tbody');
    const isTableData = table.querySelector('.no-data');

    let tableHtml = "<tr>";

    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            if (key === 'birthday') {
                // Format date if needed
                data[key] = new Date(data[key]).toLocaleDateString();
            }
            tableHtml += `<td>${data[key]}</td>`;
        }
    }

    tableHtml += "</tr>";

    if (isTableData) {
        // If the table currently has the 'no-data' row, replace it
        table.innerHTML = tableHtml;
    } else {
        // Otherwise, append a new row
        const newRow = table.insertRow();
        newRow.innerHTML = tableHtml;
    }
}

// Function to load data into the HTML table without action buttons
function loadHTMLTable(data) {
    const table = document.querySelector('table tbody');

    if (data.length === 0) {
        table.innerHTML = "<tr><td class='no-data' colspan='6'>No Data</td></tr>";
        return;
    }

    let tableHtml = "";

    data.forEach(function ({ id, name, birthday, sex, address, phone }) {
        tableHtml += "<tr>";
        tableHtml += `<td>${id}</td>`;
        tableHtml += `<td>${name}</td>`;
        tableHtml += `<td>${new Date(birthday).toLocaleDateString()}</td>`;  // Format date if needed
        tableHtml += `<td>${sex}</td>`;
        tableHtml += `<td>${address}</td>`;
        tableHtml += `<td>${phone}</td>`;
        tableHtml += "</tr>";
    });

    table.innerHTML = tableHtml;
}
