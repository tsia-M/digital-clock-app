const hoursElem = document.querySelector(".hours");
const minsElem = document.querySelector(".mins");
const secsElem = document.querySelector(".secs");
const tConvElem = document.querySelector(".time-convention");
const dayOfWeek = document.querySelector(".day-of-week");
const dateElem = document.querySelector(".date");
const monthElem = document.querySelector(".month");

const dayOfTheWeek = () => {
  const weekDays = [
     "Monday",
     "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ];

    const currentDayAndDate = new Date();
    const dayIndex = currentDayAndDate.getDay();
    const day = weekDays[(dayIndex - 1 + 7) % 7];
    dayOfWeek.innerText = day;

    dateElem.innerHTML = currentDayAndDate.getDate();

    const monthContainer = [
      "Dec",
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov"
    ];

    const monthIndex = new Date().getMonth();
    currentMonth = (monthIndex + 1 + 12) % 12;
    monthElem.innerHTML = monthContainer[currentMonth];
};

dayOfTheWeek();

let lastDay = new Date().getDate();

const timeFunc = () => {
  const currentTime = new Date();
  const hour = currentTime.getHours();
  const mins = currentTime.getMinutes();
  const secs = currentTime.getSeconds();

  hoursElem.innerHTML = hour < 10 ? '0' + hour : hour;
  minsElem.innerHTML = mins < 10 ? '0' + mins : mins;
  secsElem.innerHTML = secs < 10 ? '0' + secs : secs;

  tConvElem.innerHTML = hour < 12 ? tConvElem.innerHTML = 'AM' : tConvElem.innerHTML = 'PM';

  if (currentTime.getDate() !== lastDay) {
    lastDay = currentTime.getDate();
    dayOfTheWeek();
  } 
};

setInterval(timeFunc, 1000);

const content = () => {
  const desktopElem = document.querySelector('.content');
  const width = window.innerWidth;

  if (width <= 450) {
    desktopElem.classList.remove('.desktop');
    desktopElem.classList.add('.mobile')
  } else {
    desktopElem.classList.remove('.mobile');
    desktopElem.classList.add('.desktop');
  };
};

window.onresize = () => {
  content();
};

window.onload = () => {
  content();
};

