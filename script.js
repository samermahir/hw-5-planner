//currentDay on page
var today = moment().format('LLL');
$("#currentDay").text(today);

//
var localTime = moment().format('HH');


  // listen for save button clicks
$(".saveBtn").on("click", function (event) {
    event.preventDefault();

    var userInfo = $(this).prev().val();
   
    localStorage.setItem($(this).prev().attr("id"), userInfo)

});

       //checking current position
   $("input").each(function () {
        var selectedInput = parseInt($(this).attr("id"));

        if (selectedInput > localTime) {
            $(this).addClass("future")

        } else if (selectedInput == localTime) {

            $(this).addClass("present")

        }
        else {
            $(this).addClass("past")

        };
         //load saved data from localStorage
        $("#" + selectedInput).val(localStorage.getItem(selectedInput))
    });