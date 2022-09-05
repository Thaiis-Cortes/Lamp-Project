const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');





function lampOn (){ 
   
    lamp.src = 'img/ligada.jpg';

}

function lampOff (){ 
    lamp.src = 'img/desligada.jpg';}

function lampBroken() {
    lamp.src = 'img/quebrada.jpg'

}

 


turnOff.addEventListener('click' , lampOff);
turnOn.addEventListener ('click', lampOn );
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampBroken);










