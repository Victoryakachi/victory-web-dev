document.addEventListener("DOMContentLoaded", () => {
  const ninForm = document.getElementById("ninForm");
  const messageDiv = document.getElementById("message");
  const slipContainer = document.getElementById("slipContainer");

  ninForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const fname = document.getElementById("fname").value.trim();
    const mname = document.getElementById("mname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const maritalStatus = document.getElementById("maritalStatus").value;
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const state = document.getElementById("state").value.trim();
    const lga = document.getElementById("lga").value.trim();

    const validationError = validateInputs({
      fname,
      lname,
      dob,
      gender,
      maritalStatus,
      email,
      phone,
      address,
      state,
      lga,
    });

    if (validationError) {
      showMessage(validationError, "error");
      slipContainer.style.display = "none";
      return;
    }

    const trackingId = "NIN-PRE-" + Math.floor(100000000 + Math.random() * 900000000);

    showMessage("Pre-registration successful! See your tracking slip below.", "success");

    document.getElementById("slipTrackingId").textContent = trackingId;
    document.getElementById("slipFullName").textContent = `${fname} ${mname} ${lname}`.replace(/\s+/g, " ");
    document.getElementById("slipPhone").textContent = phone;
    slipContainer.style.display = "block";

    ninForm.reset();
  });

  function validateInputs(data) {
    if (!data.fname) return "First Name is required.";
    if (!data.lname) return "Last Name / Surname is required.";
    if (!data.dob) return "Date of Birth is required.";
    if (!data.gender) return "Gender selection is required.";
    if (!data.maritalStatus) return "Marital status selection is required.";
    
    if (!data.email) {
      return "Email address is required.";
    } else if (!isValidEmail(data.email)) {
      return "Please enter a valid email address.";
    }

    if (!data.phone) {
      return "Phone number is required.";
    } else if (!/^\d{10,11}$/.test(data.phone)) {
      return "Please enter a valid 10 or 11 digit phone number.";
    }

    if (!data.address) return "Residential address is required.";
    if (!data.state) return "State of origin is required.";
    if (!data.lga) return "LGA of origin is required.";

    return null;
  }

  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  function showMessage(msg, type) {
    messageDiv.textContent = msg;
    messageDiv.className = type;
  }
});