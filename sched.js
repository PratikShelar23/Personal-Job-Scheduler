function showCompany(companyName) {
    document.getElementById('companyName').value = companyName;
    document.getElementById('companyDetails').style.display = 'block';
    document.getElementById('companyList').style.display = 'none'; // Hide the company list
}

function scheduleCompany() {
    // Implement the logic to handle scheduling (e.g., send data to the server)
    alert('Scheduling Sucessfull');
    // You can redirect to another page using window.location.href if needed
    window.location.href = "sched.html";
}
