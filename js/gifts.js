'use strict';

let giftForm = document.getElementById('giftSide');
let type = document.getElementById('type');
let selectkind = document.getElementById('selectkind');
let selectfin = document.getElementById('selectfin');
let category = document.getElementById('category');

let input1 = document.createElement('input');


let selectType = document.getElementById('type');

function payment() {
  let lable1 = document.createElement('label');
  selectfin.appendChild(lable1);
  lable1.textContent = 'Amount';

  //  input1=document.createElement('input');
  lable1.appendChild(input1);
  input1.type = 'number';
  input1.name = 'money';

  let lable2 = document.createElement('label');
  selectfin.appendChild(lable2);
  lable2.textContent = 'Card Number';

  let input2 = document.createElement('input');
  lable2.appendChild(input2);
  input2.type = 'number';
  input2.name = 'card';

  let lable3 = document.createElement('label');
  selectfin.appendChild(lable3);
  lable3.textContent = 'Password:';

  let input3 = document.createElement('input');
  lable3.appendChild(input3);
  input3.type = 'password';
  input3.name = 'password';

//   let input3=document.createElement('input');
//   lable3.appendChild(input3);
//   input3.type = 'password';
//   input3.name = 'password';

function inKind() {
  let lable1 = document.createElement('label');
  selectkind.appendChild(lable1);
  lable1.textContent = 'Whats your gift';

  lable1.appendChild(input1);
  input1.type = 'text';
  input1.name = 'giftType';

  let lable2 = document.createElement('label');
  selectkind.appendChild(lable2);
  lable2.textContent = 'Phone Number';

  let input2 = document.createElement('input');
  lable2.appendChild(input2);
  input2.type = 'number';
  input2.name = 'phone';

  let lable3 = document.createElement('label');
  selectkind.appendChild(lable3);
  lable3.textContent = 'Address';

  let input3 = document.createElement('input');
  lable3.appendChild(input3);
  input3.type = 'text';
  input3.name = 'address';
}


selectType.addEventListener('change', action);

function action(event) {
  console.log(selectType.value);
  if (selectType.value === 'in-kind') {
    selectfin.innerHTML = '';
    inKind();

  } else if (selectType.value === 'financial') {
    selectkind.innerHTML = '';

    payment();
  }

}

let paragraph = document.getElementById('paragraph');
let submit = document.getElementById('submit');
submit.addEventListener('click', result);

function result(event) {
  event.preventDefault();

  paragraph.textContent = `Thank you ${giftForm.name.value} for supporting ${giftForm.category.value} by giving ${input1.value} we will contact you very soon`;

}

console.log(giftForm);
}
