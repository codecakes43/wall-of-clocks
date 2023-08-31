// Standard clock function 
function standardClock() {
    const currentTime = new Date();
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();
    const second = currentTime.getSeconds();

    const hourRotation = (hour * 30) + (minute / 2);  
    const minuteRotation = (minute * 6) + (second / 10);  
    const secondRotation = second * 6;  

    document.querySelector('.first .hours-hand').style.transform = `rotate(${hourRotation}deg)`;
    document.querySelector('.first .minutes-hand').style.transform = `rotate(${minuteRotation}deg)`;
    document.querySelector('.first .seconds-hand').style.transform = `rotate(${secondRotation}deg)`;

    document.querySelector('.hoursPendulum').style.transform = `rotate(${hourRotation}deg)`;
    document.querySelector('.minutesPendulum').style.transform = `rotate(${minuteRotation}deg)`;
  
    document.querySelector('.secondStandard .hours-hand').style.transform = `rotate(${hourRotation}deg)`;
    document.querySelector('.secondStandard .minutes-hand').style.transform = `rotate(${minuteRotation}deg)`;
    document.querySelector('.secondStandard .seconds-hand').style.transform = `rotate(${secondRotation}deg)`;

    document.querySelector('.thirdStandard .hours-hand').style.transform = `rotate(${hourRotation}deg)`;
    document.querySelector('.thirdStandard .minutes-hand').style.transform = `rotate(${minuteRotation}deg)`;
    
  }

  setInterval(standardClock, 500);
  standardClock();
  
// Block clock function 

  function blockClock(){
    const tableOfMonths = [1,2,3,4,5,6,7,8,9,10,11,12];
    const tableOfDays = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    
    const currentDate = new Date();
    document.querySelector('.yearBox').innerHTML = currentDate.getFullYear();
    document.querySelector('.monthBox').innerHTML = tableOfMonths[currentDate.getMonth()];
    document.querySelector('.dayBox').innerHTML = currentDate.getDate();
    document.querySelector('.dateBox').innerHTML=tableOfDays[currentDate.getDay()];
    
    let h = currentDate.getHours();
    let m = currentDate.getMinutes();
    let s = currentDate.getSeconds();
    
    function addZero(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }
      h = addZero(h);
      m = addZero(m);
      s = addZero(s);
      document.querySelector('.timeBox').innerHTML = h + ":" + m + ":" + s;
      document.querySelector('.timeDisplay').innerHTML = h + ":" + m + ":" + s;

    t = setTimeout(function(){
      blockClock()
      }, 500);
  }

blockClock();

// Stoper clock function 

let startTime = 0;
let intervalId;
let isRunning = false;

const timeDisplay = document.querySelector('.stoperTime');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');

function updateTime() {
  const currentTime = new Date().getTime();
  const elapsedTime = currentTime - startTime;
  const formattedTime = formatTime(elapsedTime);
  timeDisplay.textContent = formattedTime;
}

function formatTime(milliseconds) {
  const date = new Date(milliseconds);
  const hours = date.getUTCHours().toString().padStart(2, '0');
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');
  const seconds = date.getUTCSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

startButton.addEventListener('click', () => {
  if (!isRunning) {
    startTime = new Date().getTime();
    intervalId = setInterval(updateTime, 1000);
    isRunning = true;
  }
});

stopButton.addEventListener('click', () => {
  if (isRunning) {
    clearInterval(intervalId);
    isRunning = false;
  }
});

resetButton.addEventListener('click', () => {
  clearInterval(intervalId);
  isRunning = false;
  timeDisplay.textContent = '00:00:00';
});

