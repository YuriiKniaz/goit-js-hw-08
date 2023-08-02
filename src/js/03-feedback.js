import throttle from 'lodash.throttle';

const FROM_KEY = 'feedback-form-state';
const refs = {
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
  form: document.querySelector('.feedback-form'),
};

let formData = JSON.parse(localStorage.getItem(FROM_KEY)) || {};

function formInputs () {
  refs.email.value = formData.email || '';
  refs.message.value = formData.message || '';
};

formInputs();

function inputData (e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(FROM_KEY, JSON.stringify(formData));
};

function formSubmit (e) {
  e.preventDefault();
  console.log(formData);
  localStorage.removeItem(FROM_KEY);
  e.currentTarget.reset();
  formData = {};
};

refs.form.addEventListener('input', throttle(inputData, 500));
refs.form.addEventListener('submit', formSubmit);