const startMenuBtn = document.querySelector('.img-start')
const startMenu = document.querySelector('.menu')

let hrs = document.querySelector('.hrs')
let mins = document.querySelector('.mins')

const showMenu = () => {
    startMenu.classList.toggle('hide')
}


setInterval(() =>{
    let currentTime = new Date()

    hrs.innerHTML = (currentTime.getHours() < 10? "0":"") + currentTime.getHours()
    mins.innerHTML = (currentTime.getMinutes() < 10? "0":"") + currentTime.getMinutes()
    if(mins<10){
        mins.innerHTML = "0"+currentTime.getMinutes()
    }
},1000)

startMenuBtn.addEventListener('click', showMenu)
