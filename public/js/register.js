var firstName = document.forms['myForm']['firstName'];
var lastName = document.forms['myForm']['lastName'];
var phoneNumber = document.forms['myForm']['phoneNumber'];

firstName.addEventListener('blur', firstNameVerify, true);
lastName.addEventListener('blur', lastNameVerify, true);
phoneNumber.addEventListener('blur', phoneNumberVerify, true);

function Validate() {

  if (firstName.value == "") {
    username.style.border = "1px solid red";
    document.getElementById('firstName_div').style.color = "red";
    name_error.textContent = "First Name is required";
    firstName.focus();
    return false;
  }
 
  if (lastName.value == "") {
    username.style.border = "1px solid red";
    document.getElementById('lastName_div').style.color = "red";
    name_error.textContent = "Last Name is required";
    lastName.focus();
    return false;
  }
  
  if (phoneNumber.value == "") {
    phoneNumber.style.border = "1px solid red";
    document.getElementById('phoneNumber_div').style.color = "red";
    phoneNumber_error.textContent = "Phone Number is required";
    phoneNumber.focus();
    return false;
  }
}
function firstNameVerify() {
  if (firstName.value != "") {
   firstName.style.border = "1px solid #5e6e66";
   document.getElementById('firstName_div').style.color = "#5e6e66";
   firstName_error.innerHTML = "";
   return true;
  }
}
function lastNameVerify() {
    if (lastName.value != "") {
     lastName.style.border = "1px solid #5e6e66";
     document.getElementById('lastName_div').style.color = "#5e6e66";
     lastName_error.innerHTML = "";
     return true;
    }
  }
function phoneNumberVerify() {
  if (phoneNumber.value != "") {
  	phoneNumber.style.border = "1px solid #5e6e66";
  	document.getElementById('phoneNumber_div').style.color = "#5e6e66";
  	phoneNumber_error.innerHTML = "";
  	return true;
  }
}
