var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var studytime;
var evening = 18;

// Getting it to show the current time on the page
var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours
	  if (hours >= noon)
	  {
		  meridian = "PM";
	  }

	  if (hours > noon)
	  {
		  hours = hours - 12;
	  }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function() 
{
  var time = new Date().getHours();
  var messageText;
  var image = "https://api.time.com/wp-content/uploads/2019/12/Pug.jpg";

  var timeEventJS = document.getElementById("timeEvent");
  var pugImageJS = document.getElementById('pugImage');
  
  if (time == studytime)
  {
    image = "https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8xNDMxODc4Ni9vcmlnaW4ucG5nIiwiZXhwaXJlc19hdCI6MTY0NTkwOTQyMn0.FW0hAt3PxdpVijhJzMPue7W5c90Jfe-XTgiR-hT1H_s/img.png?width=980";
    messageText = "Let's study!";
  }
  else if (time == wakeuptime)
  {
    image = "https://i.pinimg.com/originals/d5/1b/80/d51b80e35d9d6049c2b9f02401edd9be.jpg";
    messageText = "Wake up!";
  }
  else if (time == lunchtime)
  {
    image = "https://spoonuniversity.com/wp-content/uploads/sites/31/2016/05/Screen-Shot-2016-04-27-at-1.00.04-AM-670x670.jpg";
    messageText = "Let's have some lunch!";
  }
  else if (time == naptime)
  {
    image = "https://i.redd.it/9ter3a5ofd711.jpg";
    messageText = "Sleep tight!";
  }
  else if (time < noon)
  {
    image = "https://i.pinimg.com/originals/84/c0/98/84c098c21eeebfe473bd1fcc1a20fbf4.jpg";
    messageText = "Good morning!";
  }
  else if (time >= evening)
  {
    image = "https://i.pinimg.com/originals/7a/70/2e/7a702ed4c34b7a40edeafe92b3d07bf2.jpg";
    messageText = "Good evening!";
  }
  else
  {
    image = "https://i.pinimg.com/474x/dd/90/2b/dd902b3176e78091a3d44bd756a6a52b.jpg";
    messageText = "Good afternoon!";
  }

  console.log(messageText); 
  timeEventJS.innerText = messageText;
  pugImage.src = image;
  
  showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval( updateClock, oneSecond);


// Getting the Study Time Button To Work
var studyButton = document.getElementById("studyTimeButton");

var studyEvent = function()
{
    if (studytime < 0) 
    {
        studytime = new Date().getHours();
        studyTimeButton.innerText = "Study Over!";
        studyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        studytime = -1;
        studyTimeButton.innerText = "Study Time!";
        studyTimeButtonn.style.backgroundColor = "#222";
    }
};

studyButton.addEventListener("click", studyEvent);
studyEvent(); 


// Activates Wake-Up selector
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function()
{
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

var lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
var napTimeSelector =  document.getElementById("napTimeSelector");

var napEvent = function()
{
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);