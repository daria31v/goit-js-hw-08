import throttle from "lodash.throttle";

const feedbackForm = document.querySelector('.feedback-form');
const KEY = 'feedback-form-state';
const formData = {};

let emailEl = document.querySelector('input');
let messageEl = document.querySelector('textarea');


dataFromLocalStorage();

feedbackForm.addEventListener('submit', onFormSubmit);
feedbackForm.addEventListener('input', throttle(onInputUser, 500));

// пеервірка LS при перезавантаженні сторінки
function dataFromLocalStorage() {
    if (localStorage.getItem(KEY)){
    const savedData = JSON.parse(localStorage.getItem(KEY) || '');
          
    feedbackForm.elements.email.value = savedData.email;
    feedbackForm.elements.message.value = savedData.message;
} 
}  

// відправув даних у LS
function onInputUser() {
    formData.email = feedbackForm.elements.email.value;
    formData.message = feedbackForm.elements.message.value;
    localStorage.setItem(KEY, JSON.stringify(formData));
}

// зчитування даних з LS
function onFormSubmit(evt) {
    evt.preventDefault();
    if (feedbackForm.elements.email.value && feedbackForm.elements.message.value) {
    dataSend({
        email: emailEl.value, message: messageEl.value
    });
    evt.currentTarget.reset();
    localStorage.removeItem(KEY);
    }
} 
function dataSend({ email, message } = {}) {
    return console.log("send form", { email, message })
}    



