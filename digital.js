const clockElement = document.getElementById('clock');
const dateElement = document.getElementById('date');
const dayElement = document.getElementById('day');
let is24HourFormat = false;

function updateClock() {
     const now = new Date();
     let hours = now.getHours();
     let minutes = now.getMinutes().toString().padStart(2, '0');
     let seconds = now.getSeconds().toString().padStart(2, '0');
     let month = now.toLocaleString('default', {
          month: 'long'
     });
     let monthNumber = now.getMonth() + 1;
     let date = now.getDate();
     let year = now.getFullYear();
     let dayOfWeek = now.toLocaleString('default', {
          weekday: 'long'
     });

     if (!is24HourFormat) {
          hours = hours % 12;
          if (hours === 0) hours = 12;
          const amPm = hours > 12 ? 'AM' : 'PM';
          hours = hours.toString().padStart(2, '0');
          const clockString = `${hours}:${minutes}:${seconds} ${amPm}`;
          const dayString = `${dayOfWeek.toUpperCase()}`;
          const dateString = `${month.toUpperCase()} ${monthNumber.toString().padStart(2, '0').toUpperCase()}-${date.toString().padStart(2, '0').toUpperCase()}-${year.toString().toUpperCase()}`
          clockElement.innerText = clockString;
          dayElement.innerText = dayString;
          dateElement.innerText = dateString;
     } else {
          hours = hours.toString().padStart(2, '0');
          const dayString = `${dayOfWeek.toUpperCase()}`;
          const clockString = `${hours}:${minutes}:${seconds}`;
          const dateString = `${month.toUpperCase()} ${monthNumber.toString().padStart(2, '0').toUpperCase()}-${date.toString().padStart(2, '0').toUpperCase()}-${year.toString().toUpperCase()}`
          clockElement.innerText = clockString;
          dayElement.innerText = dayString;
          dateElement.innerText = dateString;
     }
}

document.getElementById('format-button').addEventListener('click', () => {
     is24HourFormat = !is24HourFormat;
     document.getElementById('format-info').innerText = is24HourFormat ? '24-H DIGITAL CLOCK' : '12-H DIGITAL CLOCK';
     updateClock();
});

updateClock();
setInterval(updateClock, 1000);