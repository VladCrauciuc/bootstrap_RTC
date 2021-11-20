const time = document.getElementById('time');
let greeting = document.getElementById('greeting');

function showTime() {
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  // output time
  time.textContent = `${addZero(hour)} : ${addZero(min)} : ${addZero(sec)}`;

  if (hour >= 0 && hour < 12) {
    greeting.textContent = 'Good Morning';
  }
  if (hour >= 12 && hour < 18) {
    greeting.textContent = 'Good Afternoon';
  }
  if (hour >= 18 && hour < 23) {
    greeting.textContent = 'Good Evening';
  }

  setTimeout(showTime, 1000);
}

//  add zero
function addZero(n) {
  if (n < 10) {
    n = '0' + n;
    return n;
  } else {
    return n;
  }
}

// RUN
showTime();
