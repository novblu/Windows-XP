// Start Button

const startMenuBtn = document.querySelector('.img-start')
const startMenu = document.querySelector('.menu')

// Clock

let hrs = document.querySelector('.hrs')
let mins = document.querySelector('.mins')

// Open and close Internet Explorer

const openAppExplor = document.querySelector('.icon-item-explor')
const closeAppExplor = document.querySelector('.header_button-close')
const explorApp = document.querySelector('.internet-exp')

// Draggable App *BUGGED AF*

const dragElement = document.getElementById('appHeader')
const Element = document.querySelector('.internet-exp')


// Start menu

const showMenu = () => {
    startMenu.classList.toggle('hide')
}


// Draggable App *BUGGED*
                                                                        
let x = 0;
let y = 0;
let active =true

const mouseDownHandler = function (e) {
    x = e.offsetX;
    y = e.offsetY;
 

  if(active === true) {
        document.addEventListener('mousemove', mouseMoveHandler);
  } 
   
    
};

const mouseMoveHandler = function (e) {
    const dx = e.clientX - x;
    const dy = e.clientY - y;

    Element.style.top = `${dy}px`; 
    Element.style.left = `${dx}px`;
 
};

const mouseUp = () => {
   document.removeEventListener('mousemove', mouseMoveHandler);
}

 document.addEventListener('mouseup', mouseUp);
dragElement.addEventListener('mousedown', mouseDownHandler);



// Open and close Internet Explorer


const OpenExplorApp = () => {
    explorApp.classList.remove('hide')
}
const closeExplorApp = () => {
    explorApp.classList.add('hide')
}


// Clock


setInterval(() =>{
    let currentTime = new Date()

    hrs.innerHTML = (currentTime.getHours() < 10? "0":"") + currentTime.getHours()
    mins.innerHTML = (currentTime.getMinutes() < 10? "0":"") + currentTime.getMinutes()
    if(mins<10){
        mins.innerHTML = "0"+currentTime.getMinutes()
    }
},1000)

startMenuBtn.addEventListener('click', showMenu)
openAppExplor.addEventListener('dblclick', OpenExplorApp)
closeAppExplor.addEventListener('click', closeExplorApp)
