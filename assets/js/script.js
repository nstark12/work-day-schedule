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
            })
        }

        

        
        // TODO: Add code to get any user input that was saved in localStorage and set
        // the values of the corresponding textarea elements. HINT: How can the id
        // attribute of each time-block be used to do this?
        //
        // TODO: Add code to display the current date in the header of the page.


    // Run trackTime function
    trackTime();

});