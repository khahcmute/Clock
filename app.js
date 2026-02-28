const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");
const btnChange = document.getElementById("change-btn");
const countingTimeElement = document.getElementById("counting-time");
const controlsElement = document.querySelector(".controls");
const titleElement = document.querySelector("#title");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");
const startTime = 0;
const elapsedTime = 0;
const timerInterval = null;

function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  timeElement.textContent = `${hours} : ${minutes} : ${seconds}`;
  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][now.getDay()];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ][now.getMonth()];
  const date = now.getDate();
  const year = now.getFullYear();
  dateElement.textContent = `${day}, ${month} ${date}, ${year}`;
}

btnChange.addEventListener("click", () => {
  if (countingTimeElement.style.display === "none") {
    countingTimeElement.style.display = "block";
    controlsElement.style.display = "block";
    timeElement.style.display = "none";
    titleElement.textContent = "Counting Time";
  } else {
    countingTimeElement.style.display = "none";
    timeElement.style.display = "block";
    controlsElement.style.display = "none";
    titleElement.textContent = "Digital Clock";
  }
});

function startDigitalClock() {
  updateTime();
  setInterval(updateTime, 1000);
}

function startCountingTime() {
  elapsedTime = Date.now() - startTime;
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60))
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60))
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000)
    .toString()
    .padStart(2, "0");
  const milliseconds = ((elapsedTime % 1000) / 10).toString().padStart(2, "0");
  countingTimeElement.textContent = `${hours} : ${minutes} : ${seconds} : ${milliseconds}`;
}

startDigitalClock();

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop1);
resetBtn.addEventListener("click", reset);

function start() {
  if (timerInterval) return;
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(startCountingTime, 10);
}

function stop1() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function reset() {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  countingTimeElement.textContent = "00 : 00 : 00 : 00";
}
