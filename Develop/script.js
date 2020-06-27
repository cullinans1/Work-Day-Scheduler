// Adding date to header
var headerEl = $("jumbotron");
var currentTime = moment().format("dddd MMMM Do, YYYY");
var currentDay = $("#currentDay")
.text("Today is " + currentTime);
headerEl.append(currentDay);
