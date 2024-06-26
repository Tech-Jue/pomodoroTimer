
const shortBreakTime = 5*60;
const LongBreakTime = 15*60;


let pomodoroTimer = document.getElementById("pomodoroTimer");
let shortBreakTimer = document.getElementById("shortBreakTimer");
let longBreakTimer = document.getElementById("longBreakTimer");
let startBtn = document.getElementById("startButton")
let pauseTimer = document.getElementById("pauseButton")
let currentTime = "pomodoro";
let countDown = null;
let isTimerRunning = false;
let second = 0;
let min = 0;
let timer = document.getElementsByClassName('timer')


pomodoroTimer.addEventListener('click', time => {

    if(pauseTimer){
        pauseTimer = false;
        startTimer = Date.now() - elapsedTime;
        isTimerRunning = setInterval(currentTime, 75);
    }
    

});


shortBreakTimer.addEventListener('click', displayShortBreak => {

    console.log(displayShortBreak)
});


longBreakTimer.addEventListener('click', displayLongBreak => {

    console.log(displayLongBreak)
});


startBtn.addEventListener('click', startTimer => {

    console.log(startTimer)
});


pauseTimer.addEventListener('click', pause => {

    console.log(pause)

})