const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let seconds = 0;
let isStarted = false;
let intervalId = null;

const render = () => {
  const hours = Math.floor(seconds / 3600);
  const remainingSeconds = seconds - hours * 3600;
  const mins = Math.floor(remainingSeconds / 60);
  const secs = remainingSeconds - mins * 60;

  timeDisplay.textContent = `${hours < 10 ? "0" + hours : hours}:${
    mins < 10 ? "0" + mins : mins
  }:${secs < 10 ? "0" + secs : secs}`;
};

startBtn.addEventListener("click", () => {
  if (isStarted) return;
  isStarted = true;
  intervalId = setInterval(() => {
    seconds++;
    render();
  }, 1000);
});
pauseBtn.addEventListener("click", () => {
  if (isStarted === false) return;

  isStarted = false;

  clearInterval(intervalId);
});
resetBtn.addEventListener("click", () => {
  seconds = 0;
  render();
});
