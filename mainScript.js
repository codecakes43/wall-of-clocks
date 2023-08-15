function standardClock() {
    const currentTime = new Date();
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();
    const second = currentTime.getSeconds();

    const hourRotation = (hour * 30) + (minute / 2);  
    const minuteRotation = (minute * 6) + (second / 10);  
    const secondRotation = second * 6;  

    document.querySelector('.hours-hand').style.transform = `rotate(${hourRotation}deg)`;
    document.querySelector('.minutes-hand').style.transform = `rotate(${minuteRotation}deg)`;
    document.querySelector('.seconds-hand').style.transform = `rotate(${secondRotation}deg)`;

    document.querySelector('.hoursPendulum').style.transform = `rotate(${hourRotation}deg)`;
    document.querySelector('.minutesPendulum').style.transform = `rotate(${minuteRotation}deg)`;
  
    document.querySelector('.secondStandard .hours-hand').style.transform = `rotate(${hourRotation}deg)`;
    document.querySelector('.secondStandard .minutes-hand').style.transform = `rotate(${minuteRotation}deg)`;
    document.querySelector('.secondStandard .seconds-hand').style.transform = `rotate(${secondRotation}deg)`;

    document.querySelector('.thirdStandard .hours-hand').style.transform = `rotate(${hourRotation}deg)`;
    document.querySelector('.thirdStandard .minutes-hand').style.transform = `rotate(${minuteRotation}deg)`;
    
  }

  setInterval(standardClock, 500);
  
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
