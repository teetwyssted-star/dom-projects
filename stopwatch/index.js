const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const resetButton = document.getElementById("reset-button");
const state = document.getElementById("state");
const displayHours = document.getElementById("hours");
const displayMinutes = document.getElementById("minutes");
const displaySeconds = document.getElementById("seconds");

let intervalId;
let startTime = 0;

const formatTime = (startTime) => {
    const seconds = Math.floor(startTime%60).toString().padStart(2, "0");
    const minutes = Math.floor((startTime%3600)/60).toString().padStart(2, "0");
    const hours = Math.floor(startTime/3600).toString().padStart(2, "0")



    displaySeconds.textContent = seconds
    displayMinutes.textContent = minutes
    displayHours.textContent = hours
};

const startTimer = () => {
    intervalId = setInterval(() => {
        startTime++

        formatTime();
    }, 1000);

    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = false;
    state.textContent = "Running";
};

const stopTimer = () => {
    clearInterval(intervalId);

    startButton.disabled = false;
    stopButton.disabled = true;
    state.textContent = "Paused";
    startButton.textContent = "Resume";
};

const resetTimer = () => {
    clearInterval(intervalId);

    startTime=0;
    formatTime(startTime);

    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
    state.textContent = "Ready";
    startButton.textContent = "Start";
};

startButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", resetTimer);
stopButton.addEventListener("click", stopTimer);
