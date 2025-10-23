const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click", () => {
  if (paused) {
    paused = false;
  }
});
// pauseBtn.addEventListener("click", () => {});
// resetBtn.addEventListener("click", () => {});

function updateTime(() {
  secssetInterval
  
  } secs = Math.floor((elapsedTime / 1000) % 60);
  mins = Math.floor(((elapsedTime / 1000) * 60) % 60);
  hrs = Math.floor(((elapsedTime / 1000) * 60 * 60) % 60);

  timeDisplay.textContent = `${hrs}:${mins}:${secs}`;
}, )

// let count = 0;

// const timer = setInterval(() => {
//   console.log(count);

//   if (count === 5) {
//     clearInterval(timer);
//   }
//   count++;
// }, 1000);