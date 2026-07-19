const form = document.getElementById('loginForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const learningPage = 'elearn.html';

function checkEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function showError(field, errorElement, show) {
  if (!field || !errorElement) return;
  field.classList.toggle('invalid', show);
  errorElement.classList.toggle('show', show);
}

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailValue = email ? email.value.trim() : '';
    const passwordValue = password ? password.value : '';

    const emailIsGood = checkEmail(emailValue);
    const passwordIsGood = passwordValue.length >= 6;

    showError(email, emailError, !emailIsGood);
    showError(password, passwordError, !passwordIsGood);

    if (emailIsGood && passwordIsGood) {
      alert('Your account was created successfully! Redirecting to learning page...');
      window.location.href = learningPage;
    }
  });
}

if (email) {
  email.addEventListener('input', function () {
    showError(email, emailError, false);
  });
}

if (password) {
  password.addEventListener('input', function () {
    showError(password, passwordError, false);
  });
}
  