'use strict';

let select = document.getElementById('type');

function pay (){
  let lable = document.createElement('label');
  select.appendChild(lable);
  lable.textContent= 'amount'
  let input = document.createElement('input');
  select.appendChild(input);
  input.type = 'number';
  input.name = 'cash';
  console.log(input);
  console.log(lable);

let lable1 = document.createElement('label')
select.appendChild(lable1)
lable1.textContent = 'card number'
let input1 = document.createElement('input');
select.appendChild(input1)
input1.type = 'number';
input1.name = 'card';
}
pay ()

// let giftForm=document.getElementById('giftSide');

// let selectType=document.getElementById('type');

// function payment(){
//   let lable1=document.createElement('label');
//   giftForm.appendChild(lable1);
//   lable1.textContent='Amount';

//   let input1=document.createElement('input');
//   lable1.appendChild(input1);
//   input1.type = 'number';
//   input1.name = 'money';

//   let lable2=document.createElement('label');
//   giftForm.appendChild(lable2);
//   lable2.textContent='Card Number';

//   let input2=document.createElement('input');
//   lable2.appendChild(input2);
//   input2.type = 'number';
//   input2.name = 'card';

//   let lable3=document.createElement('label');
//   giftForm.appendChild(lable3);
//   lable3.textContent='Password:';

//   let input3=document.createElement('input');
//   lable3.appendChild(input3);
//   input3.type = 'password';
//   input3.name = 'password';

// }

// function inKind (){
//   let lable1=document.createElement('label');
//   giftForm.appendChild(lable1);
//   lable1.textContent='Whats your gift';

//   let input1=document.createElement('input');
//   lable1.appendChild(input1);
//   input1.type = 'text';
//   input1.name = 'giftType';

//   let lable2=document.createElement('label');
//   giftForm.appendChild(lable2);
//   lable2.textContent='Phone Number';

//   let input2=document.createElement('input');
//   lable2.appendChild(input2);
//   input2.type = 'number';
//   input2.name = 'phone';

//   let lable3=document.createElement('label');
//   giftForm.appendChild(lable3);
//   lable3.textContent='Address';

//   let input3=document.createElement('input');
//   lable3.appendChild(input3);
//   input3.type = 'text';
//   input3.name = 'address';
// }




