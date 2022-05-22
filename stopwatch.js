let milliseconds = 0
let seconds = 0
let minutes = 0
let hour = 0
let int

const timer = document.getElementById("timer")
const time = document.getElementById("time-container")
const buttonStart = document.getElementById("button-start")
const buttonPause = document.getElementById("button-pause")
const buttonReset = document.getElementById("button-reset")

buttonStart.addEventListener('click', ()=>{
    int = setInterval(displayTimer, 10)
    time.setAttribute("style", "background: white; color: #09b77c;")
    // time.setAttribute("style", "color: #09b77c;")
})

buttonPause.addEventListener('click', ()=>{
    clearInterval(int)
    time.setAttribute("style", "background: 09b77c; color: white;")
})

buttonReset.addEventListener('click', ()=>{
    clearInterval(int)
    milliseconds = 0
    seconds = 0
    minutes = 0
    hour = 0
    timer.innerHTML = '00 : 00 : 00'
    time.setAttribute("style", "background: 09b77c; color: white;")
})

function displayTimer(){
    milliseconds+=10
    if (milliseconds == 1000) {
        milliseconds = 0
        seconds ++
        if (seconds == 60) {
            seconds = 0
            minutes++
            if (minutes == 60) {
                minutes = 0
                hour ++
            }
        }
    }
    let h = hour < 10 ? "0" + hour : hour
    let m = minutes < 10 ? "0" + minutes : minutes
    let s = seconds <10 ? "0" + seconds : seconds 
    // let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds<100 ? "0" + milliseconds : milliseconds

    timer.innerHTML = `${h} : ${m} : ${s}`
}

