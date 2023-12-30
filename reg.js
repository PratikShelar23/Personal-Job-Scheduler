function addRow() {
    var companyName = document.getElementById("companyName").value;
    var driveDate = document.getElementById("driveDate").value;
    var link = document.getElementById("link").value;

    var table = document.getElementById("driveTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3); // New cell for the delete button

    cell1.innerHTML = companyName;
    cell2.innerHTML = driveDate;

    // Create a hyperlink element and set its href attribute
    var linkElement = document.createElement("a");
    linkElement.href = link;
    linkElement.textContent = link;
    cell3.appendChild(linkElement);

    cell4.innerHTML = '<button class="delete-button">Delete</button>'; // Add delete button

    // Clear input fields after adding a row
    document.getElementById("companyName").value = "";
    document.getElementById("driveDate").value = "";
    document.getElementById("link").value = "";
}

// Move the event listener inside the addRow function
const table = document.getElementById('driveTable');
table.addEventListener('click', function (event) {
    // Check if the clicked element is a delete button
    if (event.target.classList.contains('delete-button')) {
        // Get the parent row and remove it
        const row = event.target.closest('tr');
        row.remove();
    }
});
