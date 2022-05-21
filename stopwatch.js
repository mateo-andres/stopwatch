let seconds = 00
let minutes = 00

const appendMinutes = document.getElementById("minutes")
const appendSeconds = document.getElementById("seconds")
const buttonStart = document.getElementById("button-start")
const buttonPause = document.getElementById("button-pause")
const buttonReset = document.getElementById("button-reset")

let interval

function startTimer() {
    minutes ++

    if (minutes<9) {
        appendMinutes.innerHTML = "0" + minutes
    }
    if (minutes>9) {
        appendMinutes.innerHTML = minutes
    }
    if (minutes > 99) {
        seconds++
        appendSeconds.innerHTML = "0" + seconds
        minutes = 0
        appendMinutes.innerHTML = "0" + 0
    }
    if (seconds > 9) {
        appendSeconds.innerHTML = seconds
    }
}

buttonStart.onclick = function (){
    interval = setInterval(startTimer)
}
buttonPause.onclick = function (){
    clearInterval(interval)
}
buttonReset.onclick = function(){
    clearInterval(interval)
    minutes = "00"
    seconds = "00"

    appendSeconds.innerHTML = seconds
    appendMinutes.innerHTML = minutes
}

