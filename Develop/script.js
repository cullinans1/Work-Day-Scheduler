// Adding date to header
var currentTime = moment().format("dddd MMMM Do, YYYY");
var currentDay = $("#currentDay")
.text("Today is " + currentTime);
$("jumbotron").append(currentDay);

// save button clicks and saving to local storage
$(".saveBtn").on("click", function() {
    //get values for text entry and time it is in
    var taskText = $(this).siblings(".event-entry").val();
    var taskTime = $(this).parent().attr("id");
    //save items to local storage
    localStorage.setItem(taskTime, taskText);
});
// function to check current hour 
function currentHour() {
    var updatedHour = moment().format("LT");
    console.log(updatedHour);
};
currentHour();

//loading local storage items
$("#9am .event-entry").val(localStorage.getItem("9am"));
$("#10am .event-entry").val(localStorage.getItem("10am"));
$("#11am .event-entry").val(localStorage.getItem("11am"));
$("#12pm .event-entry").val(localStorage.getItem("12pm"));
$("#1pm .event-entry").val(localStorage.getItem("1pm"));
$("#2pm .event-entry").val(localStorage.getItem("2pm"));
$("#3pm .event-entry").val(localStorage.getItem("3pm"));
$("#4pm .event-entry").val(localStorage.getItem("4pm"));
$("#5pm .event-entry").val(localStorage.getItem("5pm"));