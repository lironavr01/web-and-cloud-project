// Get the form and its input fields
const form = document.getElementById("signupForm");
const fullnameInput = document.getElementById("fullname");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// Get the message elements
const fullnameError = document.getElementById("fullnameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const successMessage = document.getElementById("successMessage");

// This runs when the user clicks "צור חשבון"
form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop the page from refreshing

  // Clear old messages and red borders
  fullnameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  successMessage.textContent = "";
  fullnameInput.classList.remove("input-error");
  emailInput.classList.remove("input-error");
  passwordInput.classList.remove("input-error");

  let isValid = true;

  // 1. Full name must not be empty
  if (fullnameInput.value.trim() === "") {
    fullnameError.textContent = "נא להזין שם מלא";
    fullnameInput.classList.add("input-error");
    isValid = false;
  }

  // 2. Email must be written correctly (text@text.text)
  const emailPattern = /^\S+@\S+\.\S+$/;
  if (emailInput.value.trim() === "") {
    emailError.textContent = "נא להזין אימייל";
    emailInput.classList.add("input-error");
    isValid = false;
  } else if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "כתובת האימייל אינה תקינה";
    emailInput.classList.add("input-error");
    isValid = false;
  }

  // 3. Password must be at least 6 characters
  if (passwordInput.value.trim() === "") {
    passwordError.textContent = "נא להזין סיסמה";
    passwordInput.classList.add("input-error");
    isValid = false;
  } else if (passwordInput.value.length < 6) {
    passwordError.textContent = "הסיסמה חייבת להכיל לפחות 6 תווים";
    passwordInput.classList.add("input-error");
    isValid = false;
  }

  // If all fields are correct, show a success message
  if (isValid) {
    successMessage.textContent = "ההרשמה בוצעה בהצלחה!";
    form.reset(); // clear the fields
  }
});
