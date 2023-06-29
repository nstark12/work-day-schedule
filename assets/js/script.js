// Display today's date
var today = dayjs().format('dddd, MMMM D');
$("#currentDay").html(today);
// Ensures code doesn't run until browser has finished rendering html elements
$(document).ready(function () {

        // Click listener on save button
        $(".saveBtn").on('click', function() {
            // Gets value of description (a sibling)
            var description = $(this).siblings(".description").val();
            // Gets value of time (parent block) using id
            var time = $(this).parent().attr("id");

            // Save to localStorage
            localStorage.setItem(time, description);
        });

        function trackTime() {
            // Get current time from dayjs
            var currentTime = dayjs().hour();
            // Loop over time blocks and apply class of past, present, or future
            $(".time-block").each(function () {
                var blockHour = parseInt($(this).attr("id").split("hour-")[1]);
                
                // If statements to decide which class to add to each time block
                if (blockHour < currentTime ) {
                    $(this).removeClass("present");
                    $(this).removeClass("future");
                    $(this).addClass("past");
                } else if (blockHour === currentTime) {
                    $(this).removeClass("past");
                    $(this).removeClass("future");
                    $(this).addClass("present");
                } else {
                    $(this).removeClass("past");
                    $(this).removeClass("present");
                    $(this).addClass("future");
                }
            });
        };

        // TODO: Add code to get any user input that was saved in localStorage and set
        // the values of the corresponding textarea elements. HINT: How can the id
        // attribute of each time-block be used to do this?
        //
        
        // Get saved entries if any
        $("#hour-9 .description").val(localStorage.getItem("hour-9"));
        $("#hour-10 .description").val(localStorage.getItem("hour-10"));
        $("#hour-11 .description").val(localStorage.getItem("hour-11"));
        $("#hour-12 .description").val(localStorage.getItem("hour-12"));
        $("#hour-13 .description").val(localStorage.getItem("hour-13"));
        $("#hour-14 .description").val(localStorage.getItem("hour-14"));
        $("#hour-15 .description").val(localStorage.getItem("hour-15"));
        $("#hour-16 .description").val(localStorage.getItem("hour-16"));
        $("#hour-17 .description").val(localStorage.getItem("hour-17"));


    // Run trackTime function
    trackTime();

});