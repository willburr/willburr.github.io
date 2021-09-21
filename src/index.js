import _ from "lodash";

var timer; 
var time = 0;

const timeText = document.getElementById("time-txt");

const tick = () => {
    time += 1;
    const centiseconds = (time % 100).toString().padStart(2, "0");
    const hours = Math.floor(time / (60 * 60 * 100)).toString().padStart(2, "0");
    const minutes = Math.floor(time / (60 * 100)).toString().padStart(2, "0");
    const seconds = Math.floor(time / 100).toString().padStart(2, "0");

    timeText.innerText = `${hours}:${minutes}:${seconds}.${centiseconds}`;
};

document.getElementById("start-btn").addEventListener('click', () => {
    // Start timer
    if (!timer) {
        timer = setInterval(tick, 10);
    }
});

document.getElementById("end-btn").addEventListener('click', () => {
    // Stop if possible
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
});