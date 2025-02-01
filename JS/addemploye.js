// Function to update Panchayath options based on selected District
function updatePanchayathOptions() {
    const district = document.getElementById("district").value;
    const panchayathSelect = document.getElementById("panchayath");
  
    // Clear current Panchayath options
    panchayathSelect.innerHTML = "<option value=''>Select a panchayath</option>";
  
    // Define Panchayaths for each District
    const panchayaths = {
      "District1": ["Panchayath A1", "Panchayath B1", "Panchayath C1"],
      "District2": ["Panchayath A2", "Panchayath B2", "Panchayath C2"],
      "District3": ["Panchayath A3", "Panchayath B3", "Panchayath C3"]
    };
  
    // If a district is selected, update the Panchayath options
    if (district && panchayaths[district]) {
      panchayaths[district].forEach(function(panchayath) {
        const option = document.createElement("option");
        option.value = panchayath;
        option.textContent = panchayath;
        panchayathSelect.appendChild(option);
      });
    }
  }
  
  // Function to validate the form
  function validateForm() {
    let isValid = true;
    
    // Clear previous error messages
    clearErrors();
  
    // Validate Username
    const username = document.getElementById("username").value;
    if (username.trim() === "") {
      showError("usernameError", "Username is required.");
      isValid = false;
    }
  
    // Validate User ID (ensure it contains only numbers)
    const userId = document.getElementById("userId").value;
    const userIdRegex = /^[0-9]+$/;
    if (!userId.match(userIdRegex)) {
      showError("userIdError", "User ID must be a number.");
      isValid = false;
    }
  
    // Validate Password (at least 6 characters)
    const password = document.getElementById("password").value;
    if (password.length < 6) {
      showError("passwordError", "Password must be at least 6 characters.");
      isValid = false;
    }
  
    // Validate Confirm Password (should match Password)
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (confirmPassword !== password) {
      showError("confirmPasswordError", "Passwords do not match.");
      isValid = false;
    }
  
    // Validate District (ensure selection)
    const district = document.getElementById("district").value;
    if (district === "") {
      showError("districtError", "District is required.");
      isValid = false;
    }
  
    // Validate Panchayath (ensure selection)
    const panchayath = document.getElementById("panchayath").value;
    if (panchayath === "") {
      showError("panchayathError", "Panchayath is required.");
      isValid = false;
    }
  
    return isValid;  // Return false if any validation fails
  }
  
  // Function to show error messages
  function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
  }
  
  // Function to clear error messages
  function clearErrors() {
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach(element => {
      element.textContent = "";
    });
  }
  