var startTime = 1;
var time = startTime * 60;
var startButtonEl = document.querySelector('button');
var timerEl = document.querySelector('#countdown')
var question = document.createElement();

//This function is the timer
var updateCountDown = function () {
    var timeLeft = Math.floor(time / 60);
    var seconds = time % 60;

    seconds = seconds < 1 ? '0' + seconds : seconds;

    timerEl.innerHTML = `${timeLeft}: ${seconds}`;
    time--;
};

//This function runs the timer when the start button is clicked
startButtonEl.addEventListener('click', function () {
    setInterval(updateCountDown, 1000);
    startButtonEl.remove();
});

