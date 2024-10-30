var currentpage = 0


function myFunction(element) {
    currentpage = element.id;
    currentpage.background;
    element.style.backgroundColor = "black";
  }


function updateTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridiem = "AM";
  // Convert to 12-hour time format
  if (hours > 12) {
            hours -= 12;
            meridiem = "PM";
  }
  if (hours === 0) {
            hours = 12;
  }
          // Add leading zeros to minutes and seconds
  if (minutes < 10) {
            minutes = "0" + minutes;
  }
  if (seconds < 10) {
            seconds = "0" + seconds;
  }
          // Build the time string
  var timeString = hours + ":" + minutes + ":" + seconds + " " + meridiem;
  // Update the HTML element with the time string
  document.getElementById("time").innerHTML = timeString;
}
setInterval(updateTime, 1000);

