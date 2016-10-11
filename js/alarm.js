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
