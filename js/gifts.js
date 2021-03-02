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

  let lable5 = document.createElement('label');
  selectkind.appendChild(lable5);
  lable5.textContent = 'Quantity :';

  let input5 = document.createElement('input');
  lable5.appendChild(input5);
  input5.type = 'number';
  input5.name = 'Quantity';

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
let summ =0;

function result(event) {
  event.preventDefault();
  paragraph.textContent = `Thank you ${giftForm.name.value} for supporting ${giftForm.category.value} by giving ${input1.value} we will contact you very soon`;
  
  summ=input1.value;
  getRes();
  saveToLoc();

  console.log(locTotal);

  submit.removeEventListener('click', result);

}


let result1 = document.getElementById('result1');
submit.addEventListener('click', image);


function image(event) {
  submit.removeEventListener('click', image);


  let img = document.createElement('img');

  if (category.value === 'Alhusain Center for Cancer') {



    img.src = 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Al-Hussain_Cancer_Center.jpg'
    result1.appendChild(img);

  } else if (category.value == 'refugees') {
    img.src = 'https://www.madania.tn/wp-content/uploads/2018/02/MainRefugee.jpg'
    result1.appendChild(img);

  } else if (category.value == 'orphans') {
    img.src = 'https://2.bp.blogspot.com/-Ftzno8ran0M/W_hQJ3BEY8I/AAAAAAAACbg/550P0Y7cHXc0BahTp4PhJOex-1e9OTK0gCLcBGAs/s1600/f98dcce921c21f0cb2031d9624a0a7e4_400x400.jpeg'
    result1.appendChild(img);

  }
  else if (category.value == 'poor') {
    img.src = 'http://almasalah.com/MediaStorage/GalleryImages/129782.jpg?width=750&&height=375'
    result1.appendChild(img);


  }

}


function saveToLoc()
{

    let locS= JSON.stringify(summ);
    localStorage.setItem("Sumation", summ);
    

}
let locTotal=0;
function getRes()
{
    let prevVal= localStorage.getItem('Sumation');
    locTotal=JSON.parse(prevVal);
    
    locTotal += summ ;
    
    
   
}


