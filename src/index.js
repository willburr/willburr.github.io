import _ from "lodash";

var timer; 
var time = 0;

const timeText = document.getElementById("time-txt");

const tick = () => {
    time += 1;

    const hours = Math.floor(time / (60 * 60 * 100));
    const totalMinutes = Math.floor(time / (60 * 100));
    const minutes = totalMinutes % 60;
    const totalSeconds = Math.floor(time / 100);
    const seconds = totalSeconds % 60;
    const centiseconds = time % 100; 

    timeText.innerText = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${centiseconds.toString().padStart(2, "0")}`;
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