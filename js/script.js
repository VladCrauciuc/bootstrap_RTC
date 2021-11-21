// time/greeting/quote variables
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const quote = document.getElementById('quote');

// style variables
const container = document.getElementById('container');
const border = document.getElementById('border');

// style spreads
const darkContainerStyle = ['bg-white', 'text-dark'];
const lightContainerStyle = ['bg-dark', 'text-white'];
const darkBorderStyle = ['border-dark'];
const lightBorderStyle = ['border-white'];

// main function
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

//  add zero
function addZero(n) {
  if (n < 10) {
    n = '0' + n;
    return n;
  } else {
    return n;
  }
}

// seed numbers for random images - used in checkTime() below
const morningSeed = Math.floor(Math.random() * 3 + 1);
const afternoonSeed = Math.floor(Math.random() * 5 + 1);
const nightSeed = Math.floor(Math.random() * 3 + 1);

//  check time for background and style changes - hoisted to showTime()
function checkTime() {
  let today = new Date();
  let hour = today.getHours();
  if (hour >= 0 && hour < 12) {
    document.body.style.backgroundImage = `url('../images/morning${morningSeed}.jpg')`;
    dayStyle();
  }
  if (hour >= 12 && hour < 18) {
    document.body.style.backgroundImage = `url('../images/afternoon${afternoonSeed}.jpg')`;
    dayStyle();
  }
  if (hour >= 18 && hour < 23) {
    document.body.style.backgroundImage = `url('../images/night${nightSeed}.jpg')`;
    nightStyle();
  }
}

// day styling - hoisted to checkTime()
function dayStyle() {
  container.classList.remove(...darkContainerStyle);
  container.classList.add(...lightContainerStyle);
  border.classList.remove(...darkBorderStyle);
  border.classList.add(...lightBorderStyle);
}

// night styling - hoisted to checkTime()
function nightStyle() {
  container.classList.remove(...lightContainerStyle);
  container.classList.add(...darkContainerStyle);
  border.classList.remove(...lightBorderStyle);
  border.classList.add(...darkBorderStyle);
}

// RUN
showTime();
