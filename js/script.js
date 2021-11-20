const time = document.getElementById('time');
let greeting = document.getElementById('greeting');
let quote = document.getElementById('quote');

function showTime() {
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  // output time
  time.textContent = `${addZero(hour)} : ${addZero(min)} : ${addZero(sec)}`;

  if (hour >= 0 && hour < 12) {
    greeting.textContent = 'Good Morning';
    quote.textContent = '“Morning comes whether you set the alarm or not.”';
  }
  if (hour >= 12 && hour < 18) {
    greeting.textContent = 'Good Afternoon';
    quote.textContent =
      '“The afternoon knows what the morning never suspected.”';
  }
  if (hour >= 18 && hour < 23) {
    greeting.textContent = 'Good Evening';
    quote.textContent =
      '“It is better to begin in the evening than not at all.”';
  }

  checkTime();
  setTimeout(showTime, 1000);
}

function checkTime() {
  let today = new Date();
  let hour = today.getHours();
  if (hour >= 0 && hour < 12) {
    document.body.style.backgroundImage = "url('../images/morning1.jpg')";
  }
  if (hour >= 12 && hour < 18) {
    document.body.style.backgroundImage = "url('../images/afternoon1.jpg')";
  }
  if (hour >= 18 && hour < 23) {
    document.body.style.backgroundImage = "url('../images/night1.jpg')";
  }

  // setTimeout(checkTime, 1000 * 60);
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
// checkTime();
