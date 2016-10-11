(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Alarm(time, id) {
  this.time = time;
  this.active = true;
  this.id = id;
}

Alarm.prototype.getTime = function() {
  return this.time;
};

Alarm.prototype.isActive = function() {
  return this.active;
};

Alarm.prototype.getId = function() {
  return this.id;
};

Alarm.prototype.setTime = function(time) {
  this.time = time;
};

Alarm.prototype.setActive = function(active) {
  this.active = active;
};

Alarm.prototype.checkAlarm = function(time) {
    if(alarm == time) {
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

},{"./../js/alarm.js":1}]},{},[2]);
