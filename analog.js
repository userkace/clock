const clock = document.getElementById('clock-face');
const hourHand = document.getElementById('hour-hand');
const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');

// function updateClock() {
//      const now = new Date();
//      const hours = now.getHours() % 12;
//      const minutes = now.getMinutes();
//      const seconds = now.getSeconds();

//      const hourAngle = (hours * 30) + (minutes * 0.5);
//      const minuteAngle = (minutes * 6) + (seconds * 0.1);
//      const secondAngle = (seconds * 6);

//      hourHand.style.transform = `rotate(${hourAngle}deg)`;
//      minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
//      secondHand.style.transform = `rotate(${secondAngle}deg)`;
// }

// updateClock();
// setInterval(updateClock, 1000);

let currentTime = new Date();

function updateClock() {
     let currentTime = new Date();
     const hours = currentTime.getHours() % 12;
     const minutes = currentTime.getMinutes();
     const seconds = currentTime.getSeconds();

     const hourAngle = (hours * 30) + (minutes * 0.5);
     const minuteAngle = (minutes * 6) + (seconds * 0.1);
     const secondAngle = (seconds * 6);

     hourHand.style.transform = `rotate(${hourAngle}deg)`;
     minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
     secondHand.style.transform = `rotate(${secondAngle}deg)`;
}

function updateClockAdjusted(currentTime) {
     const hours = currentTime.getHours() % 12;
     const minutes = currentTime.getMinutes();
     const seconds = currentTime.getSeconds();

     const hourAngle = (hours * 30) + (minutes * 0.5);
     const minuteAngle = (minutes * 6) + (seconds * 0.1);
     const secondAngle = (seconds * 6);

     hourHand.style.transform = `rotate(${hourAngle}deg)`;
     minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
     secondHand.style.transform = `rotate(${secondAngle}deg)`;
     currentTime.setSeconds(currentTime.getSeconds() + 1);
}

let hasScrolled = false;

function handleScroll(event) {
     hasScrolled = true;
     if (event.deltaY > 0) {
          currentTime.setSeconds(currentTime.getSeconds() + 1);
     } else if (event.deltaY < 0) {
          currentTime.setSeconds(currentTime.getSeconds() - 2);
     }


     updateClockAdjusted(currentTime);
}

document.addEventListener('wheel', handleScroll);

function tick() {
     if (hasScrolled) {
          updateClockAdjusted(currentTime);
     } else {
          updateClock();
     }
}

setInterval(tick, 1000);