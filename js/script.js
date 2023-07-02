// Start menu 

const startMenuBtn = document.querySelector('.start-menu-img')
const startMenu = document.querySelector('.start-menu_open')

// Clock

let hrs = document.querySelector('.hrs')
let mins = document.querySelector('.mins')

// Open and close Internet Explorer

const openAppExplor = document.querySelector('.desktop_table-item--explor') // Open IE from Dekstop
const openMenuAppExplor = document.querySelector('.start-menu_left-item-explor') // Open IE from start menu
const closeAppExplor = document.querySelector('.header_button-close') // close IE
const explorApp = document.querySelector('.IE-APP') // IE whole app element
const explorIconColor = document.querySelector('.desktop_table-item--explor') // IE icon on desktop
const explorIconTextColor = document.querySelector('.app-text-explor') // Ie text on dekstop

// Draggable App *BUGGED AF*

const dragElement = document.getElementById('appHeader')
const Element = document.querySelector('.IE-APP')

let x = 0;
let y = 0;
let active =true

// Start menu

const showMenu = () => {
    startMenu.classList.toggle('hide')
}

const closeMenu = () => {
    startMenu.classList.add('hide')
}


// Draggable App *BUGGED*
                                                                        

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
    explorIconColor.classList.remove('clicked-icon')
    explorIconTextColor.classList.remove('clicked')
}
const firstIconClick = () => {
    explorIconColor.classList.toggle('clicked-icon')
    explorIconTextColor.classList.toggle('clicked')
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


// Show start menu

startMenuBtn.addEventListener('click', showMenu)

// Explorer

openAppExplor.addEventListener('click', firstIconClick) // first click making icon blue
openAppExplor.addEventListener('dblclick', OpenExplorApp) // opening explor from icon on dekstop
openMenuAppExplor.addEventListener('click', OpenExplorApp) // opening explor from start menu
openMenuAppExplor.addEventListener('click', closeMenu) // closing menu after clicking app in start menu

// close app
closeAppExplor.addEventListener('click', closeExplorApp)
