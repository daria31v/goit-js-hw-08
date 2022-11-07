import throttle from "lodash.throttle";


const STORAGE_KEY = 'feedback-form-state';
const feedbackForm = document.querySelector('.feedback-form');

let formData = {};
let email = document.querySelector('input');
let message = document.querySelector('textarea');


// dataFromLocalStorage - проверка при загрузке страницы
dataFromLocalStorage();

feedbackForm.addEventListener('submit', onFormSubmit);

feedbackForm.addEventListener('input', throttle(onMessageInput, 500));

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log("send form");

    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
 
}

function onMessageInput(evt) {
    
    formData[evt.target.name] = evt.target.value;
    console.log(formData[evt.target.name]);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    
}

function dataFromLocalStorage() {
    
    const saveData = JSON.parse(localStorage.getItem(STORAGE_KEY));
       
    if (saveData) {
        email.value = saveData.email;
        console.log (email.value);

        message.value = saveData.message;
        console.log( message.value);
        }
}



















// НЕ УДАЛЯТЬ   НЕ УДАЛЯТЬ   НЕ УДАЛЯТЬ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// feedbackForm.addEventListener('submit', onFormSubmit);
// message.addEventListener('input', throttle(onMessageInput, 500));

// feedbackForm.addEventListener('input', e => {
   
//     formData[e.target.name] = e.target.value;
//     // console.log('Data',formData);
    
//     const formDataSend = JSON.stringify(formData);
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));   
//     console.log('forma', formDataSend)

//     const saveData = localStorage.getItem(STORAGE_KEY);
//     console.log('saveData', saveData);

//     const parseData = JSON.parse(saveData);
//     console.log(parseData);

// });

// function onFormSubmit(evt) {
//     evt.preventDefault();
//     // console.log("send form");
//     evt.currentTarget.reset();
//     localStorage.removeItem(STORAGE_KEY);

// }

// function onMessageInput(evt) {
//     const message = evt.target.value;
//     localStorage.setItem(STORAGE_KEY, message);
    


//     // console.log(message)
     
// }

// function messageFromLocolStorage() {
//     const savedMessage = localStorage.getItem(STORAGE_KEY);
//     if (savedMessage) {
//         // console.log(savedMessage);
//         message.value = savedMessage;
//     }
    
// }