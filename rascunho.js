// index

function Startups(){
    const Star = document.getElementById('l');
    Star.classList.add('openH1');
}

function Home(){
    const Ho = document.getElementById('l');
    Ho.classList.remove('openH1');
}

function Startups(){
    const In = document.getElementById('Startups');
    In.classList.add('openStartups');
}












function HHome(){
    const HO = document.getElementById('Home');
    HO.classList.add('Home');

    HO.addEventListener('click',(e)=>{
        if(e.target.id == 'Hhome'){
            HO.classList.remove('openStartups');
        }
    })
}

function Startups(){
    const Star = document.getElementById('Startups');
    Star.classList.add('openStartups');

    Star.addEventListener('click',(e)=>{
        if(e.target.id == 'btnStartups'){
            Star.classList.remove('HomeH');
        }
    })
}
