let daysEl = document.getElementById("days");
let hoursEl = document.getElementById("hours");
let minsEl = document.getElementById("mins");
let secEl = document.getElementById("sec");

function countdown () {
    
    const current = new Date();
    const newYear = new Date(2021, 0, 1);
    const totalSec = (newYear-current) / 1000;
    const days = Math.floor(totalSec/3600/24);
    const hours = Math.floor(totalSec/3600) %24;
    const mins = Math.floor(totalSec/60)%60;
    const sec = Math.floor(totalSec)%60;

    daysEl.innerHTML=formatTime(days);
    hoursEl.innerHTML=formatTime(hours);
    minsEl.innerHTML=formatTime(mins);
    secEl.innerHTML= formatTime(sec);
    
}

function formatTime(time) {
    return time < 10? (`0${time}`) : time;
}

setInterval(countdown, 1000)
