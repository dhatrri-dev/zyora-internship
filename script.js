/* ============ Dark Mode Toggle ============ */

const themeToggleBtn = document.querySelector('#theme-toggle');
const bodyEl = document.querySelector('body');

function toggleDarkMode() {
  bodyEl.classList.toggle('dark-mode');
  const isDark = bodyEl.classList.contains('dark-mode');

  themeToggleBtn.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
  console.log('Dark mode is now:', isDark ? 'ON' : 'OFF');
}

themeToggleBtn.addEventListener('click', toggleDarkMode);

/* ============ Contact Form Validation ============ */

const contactForm = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');
const messageError = document.querySelector('#message-error');
const formStatus = document.querySelector('#form-status');

function isValidEmail(emailValue) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(emailValue);
}

function clearErrors() {
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';

  nameInput.classList.remove('input-error');
  emailInput.classList.remove('input-error');
  messageInput.classList.remove('input-error');

  formStatus.textContent = '';
  formStatus.classList.remove('success', 'error', 'visible');
}

function showFieldError(inputEl, errorEl, message) {
  errorEl.textContent = message;
  inputEl.classList.add('input-error');
}

function validateForm(nameValue, emailValue, messageValue) {
  let isValid = true;

  if (nameValue === '') {
    showFieldError(nameInput, nameError, 'Name cannot be empty.');
    isValid = false;
  }

  if (emailValue === '') {
    showFieldError(emailInput, emailError, 'Email cannot be empty.');
    isValid = false;
  } else if (!isValidEmail(emailValue)) {
    showFieldError(emailInput, emailError, 'Enter a valid email.');
    isValid = false;
  }

  if (messageValue === '') {
    showFieldError(messageInput, messageError, 'Message cannot be empty.');
    isValid = false;
  }

  return isValid;
}

function showSuccessMessage() {
  formStatus.textContent = 'Your message has been sent successfully!';
  formStatus.classList.add('success', 'visible');
}

function showErrorSummary() {
  formStatus.textContent = 'Please fix the errors above and try again.';
  formStatus.classList.add('error', 'visible');
}

function resetFormFields() {
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
}

function handleFormSubmit(e) {
  e.preventDefault();

  clearErrors();

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  console.log('Form submission attempt:', {
    name: nameValue,
    email: emailValue,
    message: messageValue
  });

  const isValid = validateForm(nameValue, emailValue, messageValue);

  if (isValid) {
    console.log('Validation passed. Message ready to send.');
    showSuccessMessage();
    resetFormFields();
  } else {
    console.log('Validation failed. Errors displayed to user.');
    showErrorSummary();
  }
}

contactForm.addEventListener('submit', handleFormSubmit);