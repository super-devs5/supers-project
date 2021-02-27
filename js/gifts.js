'use strict';

let giftForm=document.getElementById('giftSide');

let selectType=document.getElementById('type');
let giftSide= document.getElementById('category');

function payment(){
  let lable1=document.createElement('label');
  giftForm.appendChild(lable1);
  lable1.textContent='Amount';

  let input1=document.createElement('input');
  lable1.appendChild(input1);
  input1.type = 'number';
  input1.name = 'money';

  let lable2=document.createElement('label');
  giftForm.appendChild(lable2);
  lable2.textContent='Card Number';

  let input2=document.createElement('input');
  lable2.appendChild(input2);
  input2.type = 'number';
  input2.name = 'card';

  let lable3=document.createElement('label');
  giftForm.appendChild(lable3);
  lable3.textContent='Password:';

  let input3=document.createElement('input');
  lable3.appendChild(input3);
  input3.type = 'password';
  input3.name = 'password';

}

function inKind (){
  let lable1=document.createElement('label');
  giftForm.appendChild(lable1);
  lable1.textContent='Whats your gift';

  let input1=document.createElement('input');
  lable1.appendChild(input1);
  input1.type = 'text';
  input1.name = 'giftType';

  let lable2=document.createElement('label');
  giftForm.appendChild(lable2);
  lable2.textContent='Phone Number';

  let input2=document.createElement('input');
  lable2.appendChild(input2);
  input2.type = 'number';
  input2.name = 'phone';

  let lable3=document.createElement('label');
  giftForm.appendChild(lable3);
  lable3.textContent='Address';

  let input3=document.createElement('input');
  lable3.appendChild(input3);
  input3.type = 'text';
  input3.name = 'address';
}


selectType.addEventListener('change',action);


function action (event){
  

  if (selectType.value=='in-kind')
  {   

     inKind ();
  }
  else if(selectType.value== 'financial')
  {
    payment();
  
  }

}

giftSide.addEventListener('change',function(){
  if (giftSide.value === 'cancer')
  {
    let img =document.createElement('img');
img.src='https://upload.wikimedia.org/wikipedia/commons/6/6f/Al-Hussain_Cancer_Center.jpg'
document.getElementById('b1').appendChild(img); 

  }else if(giftSide.value=='refugees')
  {
    let img =document.createElement('img');
    img.src='https://www.madania.tn/wp-content/uploads/2018/02/MainRefugee.jpg'
    document.getElementById('b1').appendChild(img); 
    
  }else if (giftSide.value=='orphans')
  {
    let img =document.createElement('img');
    img.src='https://2.bp.blogspot.com/-Ftzno8ran0M/W_hQJ3BEY8I/AAAAAAAACbg/550P0Y7cHXc0BahTp4PhJOex-1e9OTK0gCLcBGAs/s1600/f98dcce921c21f0cb2031d9624a0a7e4_400x400.jpeg'
    document.getElementById('b1').appendChild(img); 
    
  }
  else if (giftSide.value=='poor')
  {let img =document.createElement('img');
  img.src='http://almasalah.com/MediaStorage/GalleryImages/129782.jpg?width=750&&height=375'
  document.getElementById('b1').appendChild(img); 
  

  }
});

