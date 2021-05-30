'use strict'
let contanier = document.getElementById('container');
let submitbtn = document.getElementById('form');
let information = [];
let imgname =['one.jpg','two.jpg','three.jpg'];

function Store(username , type , salary , condition ,img)
{
  this.username = username;
  this.type = type ;
  this.salary = salary;
  this.condition = condition;
  this.img='img/'+img;
  information.push(this);

}
Store.prototype.render = function(){
    contanier.textContent ='';
    let table = document.createElement('table');
    contanier.appendChild(table);
    let thead = document.createElement('thead');
    table.appendChild(thead);
    let trhead = document.createElement('tr');
    thead.appendChild(trhead);
    let thhead = document.createElement('th');
    trhead.appendChild(thhead);
    thhead.textContent = 'User name';

    thhead = document.createElement('th');
    trhead.appendChild(thhead);
    thhead.textContent = 'Type';

    thhead = document.createElement('th');
    trhead.appendChild(thhead);
    thhead.textContent = 'Salary';

    thhead = document.createElement('th');
    trhead.appendChild(thhead);
    thhead.textContent = 'Condition';
    for (let index = 0; index < information.length; index++) {
        let tbody = document.createElement('tbody');
        table.appendChild(tbody);
        let trbody =document.createElement('tr');
        tbody.appendChild(trbody);

        let tdbody = document.createElement('td');
        trbody.appendChild(tdbody);
        tdbody.textContent = information[index].username;

        tdbody = document.createElement('td');
        trbody.appendChild(tdbody);
        tdbody.textContent = information[index].type;

        tdbody = document.createElement('td');
        trbody.appendChild(tdbody);
        tdbody.textContent = information[index].salary;

        tdbody = document.createElement('td');
        trbody.appendChild(tdbody);
        tdbody.textContent = information[index].condition;
        
        tdbody = document.createElement('td');
        trbody.appendChild(tdbody);
        
        let img = document.createElement('img');
        tdbody.appendChild(img);
        img.setAttribute('src',information[index].img);
        // img.textContent= information[index].img;

    }
    
    
}

submitbtn.addEventListener('submit',handleclick);

function handleclick(event){

    event.preventDefault();

   let username = document.getElementById('username').value;
   let type = document.getElementById('type').value;
   let salary = salaryrandom(100,700);
   console.log(username);
   console.log(type);
   let cond;
   if(salary<=400){
      cond = 'used'
   }
   else if(salary>400)
   {
       cond= 'new';
   }
   let img = imgrandom();
   let infoemationobj = new Store (username,type,salary,cond,imgname[img]);
   infoemationobj.render();
   console.log(img);
   console.log(imgname[img]);
   setting();

}

function salaryrandom(min,max){
    return parseInt( Math.random() * (max - min) + min);
}
function setting(){
    let data = JSON.stringify(information);
    localStorage.setItem('infomation',data);
}
function getting(){
  let getItem = localStorage.getItem('infomation');
  let getobj = JSON.parse(getItem);
  let infor;
  if(getItem!= null)
  {
      for (let index = 0; index < getobj.length; index++) {
          
       infor = new Store(getobj[index].username , getobj[index].type , getobj[index].salary , getobj[index].condition);
          
      }
      infor.render();
  }

}
function imgrandom(){
    return Math.floor(Math.random() * imgname.length)
}
getting();