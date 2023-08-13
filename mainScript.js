function standardClock() {
    const currentTime = new Date();
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();
    const second = currentTime.getSeconds();

    const hourHand = document.querySelector('.hours-hand');
    const minuteHand = document.querySelector('.minutes-hand');
    const secondHand = document.querySelector('.seconds-hand');

    const hourRotation = (hour * 30) + (minute / 2);  
    const minuteRotation = (minute * 6) + (second / 10);  
    const secondRotation = second * 6;  

    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
  }
  setInterval(standardClock, 1000);

  function pendulumClock(){
    const currentTime = new Date();
    const hour = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    
    const hourHand = document.querySelector('.pendulumClock .hours');
    const minutesHand = document.querySelector('.pendulumClock .minutes');
    
    const hourRotation = (hour * 30)+(minutes / 2) + 'deg';
    const minuteRotation = (minutes * 6) + 'deg';
  
    hourHand.style.transform = `rotate(hourRotation)`;
    minutesHand.style.transform = `rotate(minuteRotation)`;
    
  }
  setInterval(pendulumClock, 1000);
  
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
    
    t = setTimeout(function(){
      blockClock()
      }, 500);
  }

blockClock();
standardClock();
pendulumClock();
