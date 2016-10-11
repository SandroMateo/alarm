var Alarm = require("./../js/alarm.js").alarmModule;

$(document).ready(function() {
  var alarmsArray = [];
  setInterval(function() {
    var currentTime = moment().format('H:mm:ss');
    $("#current-time").text(currentTime);
    alarmsArray.forEach(function(alarm) {
      if(alarm.time == currentTime && alarm.isActive()) {
        alert("ALERT! ALERT!");
      }
  }, 1000);
  });
  $("#set-alarm").last().submit(function(event) {
    event.preventDefault();
    var time = $("#alarm-time").val();
    var id = alarmsArray.length;
    var alarm = new Alarm(time, id);
    alarmsArray.push(alarm);
    console.log(alarmsArray);
    $("#alarm-display").append("<p>" + alarm.time + "</p>");
  });
});
