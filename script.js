const list = document.querySelectorAll('.list');
const main = document.querySelectorAll('.main')
const openEvent = document.querySelector('.list');
const closeEvent = document.querySelector('.list');


      
      


function activeLink(){
    list.forEach((item)=>
    item.classList.remove('active'));
    this.classList.add('active');
}


list.forEach((item)=>
item.addEventListener('click',activeLink));



//troca de itens


function HHome(){
    const HO = document.getElementById('Home');
    HO.classList.add('main');

    HO.addEventListener('click',(e)=>{
        if(e.target.id == 'btnStartups'){
            HO.classList.remove('Home');
        }
    })
}

function Startups(){
    const Star = document.getElementById('Startups');
    Star.classList.add('openStartups');

    Star.addEventListener('click',(e)=>{
        if(e.target.id == 'btnhome'){
            Star.classList.remove('openStartups');
        }
    })
}

function vagas(){
    const vag = document.getElementById('Vagas');
    vag.classList.add('openVagas');

   
}