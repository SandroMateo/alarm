var Alarm = require("./../js/alarm.js").alarmModule;

$(document).ready(function() {
  var alarmsArray = [];
  setInterval(function() {
    var currentTime = moment().format('H:mm:ss');
    $("#current-time").text(currentTime);
    alarmsArray.forEach(function(alarm) {
      if(alarm.checkAlarm(currentTime)) {
        alert("ALERT! ALERT!");
      }
  }, 1000);
  });
  $("#set-alarm").submit(function(event) {
    event.preventDefault();
    var time = $("#alarm-time").val();
    var alarm = new Alarm(time);
    alarmsArray.push(alarm);
    alarm.setId(alarmsArray.length - 1);
    console.log(alarm.alarmId);
    console.log(alarmsArray);
    $("#alarm-display").append("<p><button class='alarms btn btn-success' value=" + alarm.alarmId + ">" + alarm.time + " active: " + alarm.active + "</button></p>");
  });

  $("ul").on("click", ".alarms", function() {
    console.log($(this).val());
    var thisId = parseInt($(this).val());
    $(this).removeClass("btn-success");
    $(this).removeClass("btn-danger");
    for(var i = 0; i < alarmsArray.length; i++) {
      if(alarmsArray[i].alarmId == thisId) {
        if (alarmsArray[i].active) {
          alarmsArray[i].setActive(false);
          $(this).addClass("btn-danger");
        } else {
          alarmsArray[i].setActive(true);
          $(this).addClass("btn-success");
        }
        $(this).text(alarmsArray[i].time + " active: " + alarmsArray[i].active);
      }
    }
  });
});
