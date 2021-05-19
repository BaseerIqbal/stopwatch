var hr = 0;
var min = 0;
var sec = 0;
var stopTime = true;
const num = document.querySelector("h1.d");

function start() {
 if(stopTime == true){
   stopTime = false;
   timer();
 }
  }

function stop(){
  if(stopTime == false){
    stopTime = true;
  }
}

function timer(){
  if(stopTime == false){
    hr = parseInt(hr);
    min = parseInt(min);
    sec = parseInt(sec);

    sec += 1;
    if(sec == 60){
      min += 1;
      sec = 0;
    }
    if(min == 60){
      hr += 1;
      min = 0;
    }

    if(sec < 10 || sec == 0){
      sec = "0" + sec;
    }
    if(min < 10 || min == 0){
      min = "0" + min;
    }
    if(hr < 10 || hr == 0){
      hr = "0" + hr;
    }

  num.innerHTML = hr + ":" + min + ":" + sec;
  setTimeout("timer()", 1000);
  }
}

function reset(){
  num.innerHTML = "00:00:00";
  hr = 0;
  min = 0;
  sec = 0;
  stopTime = true;
}
