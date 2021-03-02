'use strict';

let giftForm = document.getElementById('giftSide');
let type = document.getElementById('type');
let selectkind = document.getElementById('selectkind');
let selectfin = document.getElementById('selectfin');
let category = document.getElementById('category');

let input1 = document.createElement('input');

let brEl =document.createElement('br');
let brE2 =document.createElement('br');
let brE3 =document.createElement('br');
  

let selectType = document.getElementById('type');

function payment() {
  


  let lable1 = document.createElement('label');
  selectfin.appendChild(lable1);
  
  lable1.textContent = 'Amount : ';

  lable1.appendChild(input1);
  input1.type = 'number';
  input1.name = 'money';

  selectfin.appendChild(brE2);



  let lable2 = document.createElement('label');
  selectfin.appendChild(lable2);
  lable2.textContent = 'Card Number : ';

  let input2 = document.createElement('input');
  lable2.appendChild(input2);
  input2.type = 'number';
  input2.name = 'card';
  selectfin.appendChild(brEl);

  let lable3 = document.createElement('label');
  selectfin.appendChild(lable3);
  lable3.textContent = 'Password : ';

  let input3 = document.createElement('input');
  lable3.appendChild(input3);
  input3.type = 'password';
  input3.name = 'password';
}


function inKind() {
  let lable1 = document.createElement('label');
  selectkind.appendChild(lable1);
  lable1.textContent = 'Whats your gift :';

  lable1.appendChild(input1);
  input1.type = 'text';
  input1.name = 'giftType';

  selectkind.appendChild(brEl);
  let lable5 = document.createElement('label');
  selectkind.appendChild(lable5);
  lable5.textContent = 'Quantity :';

  let input5 = document.createElement('input');
  lable5.appendChild(input5);
  input5.type = 'number';
  input5.name = 'Quantity';
  selectkind.appendChild(brE2);
  let lable2 = document.createElement('label');
  selectkind.appendChild(lable2);
  lable2.textContent = 'Phone Number :';

  let input2 = document.createElement('input');
  lable2.appendChild(input2);
  input2.type = 'number';
  input2.name = 'phone';
  selectkind.appendChild(brE3);
  let lable3 = document.createElement('label');
  selectkind.appendChild(lable3);
  lable3.textContent = 'Address :';

  let input3 = document.createElement('input');
  lable3.appendChild(input3);
  input3.type = 'text';
  input3.name = 'address';
}


selectType.addEventListener('change', action);

function action(event) {
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
  // submit.removeEventListener('click', result);
  image();
}


let result1 = document.getElementById('result1');
// submit.addEventListener('click', image);


let donation= [0,0,0,0];

let count=1;

function image() {
  // submit.removeEventListener('click', image);

  // event.preventDefault();

  let img = document.getElementById('defimg');

  if (category.value === 'Alhusain Center for Cancer') {
    donation[0]=parseInt(donation[0])+parseInt(input1.value);
    if (type.value === 'financial'){
      saveToLoc();
    }
    img.src = '/img/cancer.jpg';
    result1.appendChild(img);

  } else if (category.value ==='refugees') {
    donation[1]=parseInt(donation[1])+parseInt(input1.value);
    if (type.value === 'financial')
    {saveToLoc();}
    img.src = '/img/refugee.jpg';
    result1.appendChild(img);

  } else if (category.value ==='orphans') {
    donation[2]=parseInt(donation[2])+parseInt(input1.value);
    if (type.value === 'financial')
    {saveToLoc();}
    img.src = '/img/orphan.jpg';
    result1.appendChild(img);

  }
  else if (category.value ==='poor') {
    donation[3]=parseInt(donation[3])+parseInt(input1.value);
    if (type.value === 'financial')
    {saveToLoc();}
    img.src = 'http://almasalah.com/MediaStorage/GalleryImages/129782.jpg?width=750&&height=375';
    result1.appendChild(img);
  }
  let noor = document.getElementById('score');
  // noor.innerHTML="";
  count=0;
  chart();

}



let locTotal=[0,0,0,0];
function saveToLoc(){

  if (locTotal) {
    for (let i = 0; i < donation.length; i++) {
      donation[i]=parseInt(donation[i])+parseInt(locTotal[i]);
    }

  }
  let locS= JSON.stringify(donation);
  localStorage.setItem('Sumation', locS);

}

function getRes(){
  let prevVal= localStorage.getItem('Sumation');
  locTotal=JSON.parse(prevVal);
}

// if (count) {
//   chart();
// }
getRes();

