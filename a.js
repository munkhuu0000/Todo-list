let seconds = 0;

const timer = setInterval(() => {
  console.log(seconds);

  if (seconds === 5) {
    clearInterval(timer);
  }
  seconds++;
}, 1000);
