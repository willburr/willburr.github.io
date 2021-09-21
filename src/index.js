var timer; 
var time = 0;

const displayTime = () => {
    const hours = Math.floor(time / (60 * 60 * 100));
    const totalMinutes = Math.floor(time / (60 * 100));
    const minutes = totalMinutes % 60;
    const totalSeconds = Math.floor(time / 100);
    const seconds = totalSeconds % 60;
    const centiseconds = time % 100; 

    $('#time-txt').text(`${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${centiseconds.toString().padStart(2, "0")}`);
}

const tick = () => {
    time += 1;
    displayTime();
};

// Handle menu 
$('.menu .item')
  .tab()
;


$('#toggle-btn').on('click', function(){
    if (timer) {
        // Stop timer
        clearInterval(timer);
        timer = null;
        $(this).html("Start");
    } else {
        // Start timer
        timer = setInterval(tick, 10);
        $(this).html("Stop");
    }
});

$('#reset-btn').on('click', function() {
    time = 0;
    displayTime();
});
