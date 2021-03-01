'use strict';

let locTotal1=[0,0,0,0];
function getResult(){
  let prevVal= localStorage.getItem('Sumation');
  locTotal1=JSON.parse(prevVal);
}
getResult();

let categoryArr=['Alhusain Center for Cancer','refugees','orphans','poor'];
let intial=0;
let listDonation=document.getElementById('listDonation');

function rendertotal() {
  let liEl;
  if (locTotal1) {
    for (let i = 0; i < locTotal1.length; i++) {
      liEl=document.createElement('li');
      listDonation.appendChild(liEl);
      liEl.textContent=`The total donation for ${categoryArr[i]} : ${locTotal1[i]} $`;
    }
  }else{
    for (let i = 0; i < categoryArr.length; i++) {
      liEl=document.createElement('li');
      listDonation.appendChild(liEl);
      liEl.textContent=`The total donation for ${categoryArr[i]} : ${intial} $`;
    }
  }
}
rendertotal();
