// setTimeout(() => {
//   console.log("hello");
// }, 500);

// let hours = document.querySelectorAll(".hour")[0];
// let minutes = document.querySelectorAll(".minute")[0];
// let seconds = document.querySelectorAll(".second")[0];

let seconds = 0;

const timer = setInterval(() => {
  console.log(seconds);

  if (seconds === 5) {
    clearInterval(timer);
  }
  seconds++;
}, 1000);
