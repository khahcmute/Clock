const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");

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
updateTime();

setInterval(updateTime, 1000);
