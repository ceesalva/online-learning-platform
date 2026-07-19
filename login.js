const form = document.getElementById('loginForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

// Check if the email looks like a real email.
function checkEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

// Show or hide the error message for one field.
function showError(field, errorElement, show) {
  field.classList.toggle('invalid', show);
  errorElement.classList.toggle('show', show);
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const emailValue = email.value.trim();
  const passwordValue = password.value;

  const emailIsGood = checkEmail(emailValue);
  const passwordIsGood = passwordValue.length >= 6;

  showError(email, emailError, !emailIsGood);
  showError(password, passwordError, !passwordIsGood);

  if (emailIsGood && passwordIsGood) {
    // This is just a demo. In a real site, send the data to the server.
    alert('your account is createdsuccessful!');
  }
});

email.addEventListener('input', function () {
  showError(email, emailError, false);
});

password.addEventListener('input', function () {
  showError(password, passwordError, false);
});
  