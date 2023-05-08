//form script
function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var message = document.forms["myForm"]["message"].value;
    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var messageError = document.getElementById("messageError");
    var isValid = true;
    if (name == "") {
      nameError.innerHTML = "Name is required";
      isValid = false;
    } else {
      nameError.innerHTML = "";
    }
    if (email == "") {
      emailError.innerHTML = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      emailError.innerHTML = "Invalid email address";
      isValid = false;
    } else {
      emailError.innerHTML = "";
    }
    if (message == "") {
      messageError.innerHTML = "Message is required";
      isValid = false;
    } else {
      messageError.innerHTML = "";
    }
    return isValid;
  }