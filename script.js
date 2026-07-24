const themeToggleBtn = document.querySelector('#theme-toggle');
const bodyEl = document.querySelector('body');

function toggleDarkMode() {
  bodyEl.classList.toggle('dark-mode');

  if (bodyEl.classList.contains('dark-mode')) {
    themeToggleBtn.textContent = '☀️ Light Mode';
    console.log('Dark mode enabled');
  } else {
    themeToggleBtn.textContent = '🌙 Dark Mode';
    console.log('Dark mode disabled');
  }
}

themeToggleBtn.addEventListener('click', toggleDarkMode);

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
  formStatus.classList.remove('success', 'error');
}

function validateForm(nameValue, emailValue, messageValue) {
  let isValid = true;

  if (nameValue === '') {
    nameError.textContent = 'Name cannot be empty.';
    nameInput.classList.add('input-error');
    isValid = false;
  }

  if (emailValue === '') {
    emailError.textContent = 'Email cannot be empty.';
    emailInput.classList.add('input-error');
    isValid = false;
  } else if (!isValidEmail(emailValue)) {
    emailError.textContent = 'Enter a valid email.';
    emailInput.classList.add('input-error');
    isValid = false;
  }

  if (messageValue === '') {
    messageError.textContent = 'Message cannot be empty.';
    messageInput.classList.add('input-error');
    isValid = false;
  }

  return isValid;
}

function handleFormSubmit(e) {
  e.preventDefault();

  clearErrors();

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  console.log('Form submitted with:', nameValue, emailValue, messageValue);

  const isValid = validateForm(nameValue, emailValue, messageValue);

  if (isValid) {
    formStatus.textContent = 'Your message has been sent successfully!';
    formStatus.classList.add('success');
    console.log('Form is valid');
  } else {
    console.log('Form has errors');
  }
}

contactForm.addEventListener('submit', handleFormSubmit);