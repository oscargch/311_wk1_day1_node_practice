// import moment here; use this package in each function
const moment = require("moment");
// console.log(moment());


//'Return today\'s date in the format: May 29, 2019'
const today = () => {
  // write code for dates.today
return moment().format("dddd");
// return Moment().format('LL');

}

console.log(today());

const calendar = () => {
  // write code for dates.calendar
  return moment().format("MMM DD, YYYY");
}
console.log(calendar());

//03:21:51 PM
const currentTime = () => {
  // write code for dates.currentTime
  return moment().format("HH:MM:SS A");
}
console.log(currentTime());


module.exports = {
  today,
  calendar,
  currentTime
}