const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");
const btnChange = document.getElementById("change-btn");
const countingTimeElement = document.getElementById("counting-time");
const controlsElement = document.querySelector(".controls");
const titleElement = document.querySelector("#title");

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

startDigitalClock();
