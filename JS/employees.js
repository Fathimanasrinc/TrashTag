// Function to handle the update action
function updateEmployee(employeeId) {
  alert("Updating employee with ID: " + employeeId);
}

// Function to handle the delete action
function deleteEmployee(employeeId) {
  const row = document.getElementById('emp' + employeeId);
  if (row) {
    row.remove(); // Remove the row from the table
    alert("Employee with ID: " + employeeId + " has been deleted.");
  }
}

// Function to handle the edit action
function editEmployee(employeeId) {
  const row = document.getElementById('emp' + employeeId);
  if (row) {
    const cells = row.getElementsByTagName("td");
    const name = cells[0].textContent;
    const id = cells[1].textContent;
    const district = cells[2].textContent;
    const panchayath = cells[3].textContent;

    alert("Edit employee details:\nName: " + name + "\nID: " + id + "\nDistrict: " + district + "\nPanchayath: " + panchayath);
  }
}

// Function to filter the table based on search input (search by Employee ID)
function searchTable() {
  const input = document.getElementById("searchBar");
  const filter = input.value.toLowerCase();
  const table = document.getElementById("employeeTable");
  const rows = table.getElementsByTagName("tr");

  // Loop through all rows, hide those who don't match the search query
  for (let i = 1; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName("td");
    const id = cells[1].textContent.toLowerCase();
    
    // Check if the ID contains the search query
    if (id.indexOf(filter) > -1) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
}

function addEmployeePage(){
    window.location.href = "/HTML/addemploy.html";
}
