const list = document.querySelectorAll('.list');
const icon = document.querySelectorAll('.icon');
function activeLink(){
    list.forEach((item)=>
    item.classList.remove('active'));
    this.classList.add('active');
    if(icon == remove){ 
        icon.addEventListener('click',()=>
            icon.style.color = '#5600B3')
        
    }
    
}
list.forEach((item)=>
item.addEventListener('click',activeLink));



