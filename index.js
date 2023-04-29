// stopwatch DOM
const timeDiv = document.getElementById("time");
const lapBtn = document.getElementById("lap");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");
const lapsDiv = document.querySelector(".laps");

let miliseconds = 0;
let seconds = 0;
let minutes = 0;

let loadingMinutes = 0;
let loadingSeconds = 0;

let timerInterval = null;
let timerStatus = "stopped";
let lapNow = null;

function stopwatch() {
  miliseconds++;
  if (miliseconds / 100 === 1) {
    miliseconds = 0;
    seconds++;
  } else if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
  }
  if (seconds < 10) {
    loadingSeconds = "0" + seconds;
  } else {
    loadingSeconds = seconds;
  }
  if (minutes < 10) {
    loadingMinutes = "0" + minutes;
  } else {
    loadingMinutes = minutes;
  }
  timeDiv.textContent = `${loadingMinutes} : ${loadingSeconds} . ${miliseconds}`;
}

lapBtn.disabled = "disabled";
if ((lapBtn.disabled = "disabled")) {
  lapBtn.style.backgroundColor = "gainsboro";
}

startBtn.addEventListener("click", function () {
  if (timerStatus === "stopped") {
    timerInterval = window.setInterval(stopwatch, 10);
    startBtn.textContent = "Stop";
    startBtn.style.backgroundColor = "red";
    timerStatus = "started";
    lapBtn.style.backgroundColor = "darkgoldenrod";
    lapBtn.disabled = false;
  } else {
    clearInterval(timerInterval);
    startBtn.textContent = "Resume";
    startBtn.style.backgroundColor = "darkgoldenrod";
    timerStatus = "stopped";
    lapBtn.disabled = "disabled";
  }
});

resetBtn.addEventListener("click", function () {
  window.clearInterval(timerInterval);
  seconds = "00";
  minutes = "00";
  miliseconds = "00";
  startBtn.textContent = "Start";
  startBtn.style.backgroundColor = "darkgoldenrod";
  lapBtn.style.backgroundColor = "gainsboro";

  timeDiv.textContent = "00:00.00";
  lapsDiv.innerHTML = "<p>Laps-<p>";
});

let count = 0;

lapBtn.addEventListener("click", function () {
  count++;
  lap = document.createElement("div");
  lap.textContent = `0${count}      ${loadingMinutes}:${loadingSeconds}.${miliseconds}`;
  lapsDiv.appendChild(lap);
});

// Timer DOM
const timerHours = document.querySelector(".timer-hours");
const timerMin = document.querySelector(".timer-minutes");
const timerSec = document.querySelector(".timer-seconds");
const timerStart = document.querySelector(".timer-start");
const timerRest = document.querySelector(".timer-reset");
const timerPause = document.querySelector(".timer-pause");

// Function for onScreen change
function hoursDiv() {
  document.getElementById("hour-span").innerText = timerHours.value;
}

function minutesDiv() {
  document.getElementById("minutes-span").textContent = timerMin.value;
}

function secondsDiv() {
  document.getElementById("seconds-span").textContent = timerSec.value;
}

let secondsTimmer = timerSec.value;

function timer() {
  if (document.getElementById("seconds-span")) {
    document.getElementById("seconds-span").textContent = timerSec.value--;
  }
}
if ( document.getElementById("minutes-span") && document.getElementById("seconds-span") ){
  
}

timerStart.addEventListener("click", timer);
