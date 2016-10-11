(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Alarm(time) {
  this.time = time;
  this.active = true;
  this.alarmId = 0;
}

Alarm.prototype.setTime = function(time) {
  this.time = time;
};

Alarm.prototype.setActive = function(active) {
  this.active = active;
};

Alarm.prototype.setId = function(id) {
  this.alarmId = id;
}

Alarm.prototype.checkAlarm = function(time) {
    if(this.time == time && this.active) {
      return true;
    }
  return false;
};

exports.alarmModule = Alarm;

},{}],2:[function(require,module,exports){
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

},{"./../js/alarm.js":1}]},{},[2]);
