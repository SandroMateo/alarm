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
