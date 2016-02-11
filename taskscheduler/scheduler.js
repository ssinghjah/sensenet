var schedule = require('node-schedule');
var date = new Date(2016, 1, 10, 21, 18, 0);
 
var j = schedule.scheduleJob(date, function(){
  console.log('The answer to life, the universe, and everything!');
});