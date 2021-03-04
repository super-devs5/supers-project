'use strict';


let eventdiv = document.getElementById('eventdiv');

let eventForm = document.getElementById('eventForm');
let submit = document.getElementById('submit');
submit  = document.querySelector("button");
submit.addEventListener('click', thanks);
let paragraph2 = document.getElementById('paragraph2');
console.log(eventForm);
function thanks(event){
  event.preventDefault();

  

  paragraph2.textContent = `Thank you ${eventForm.name.value} , for volunteering in ${eventForm.eventsSelect.value} we will contact you very soon. `;
}



submit.addEventListener("click", active);

function active() {
  submit.classList.toggle("is_active");
}
