var today = moment().format('LLL');
$("#currentDay").text(today);


var localTime = moment().format('HH');



$(".saveBtn").on("click", function (event) {
    event.preventDefault();

    var userInfo = $(this).prev().val();
   
    localStorage.setItem($(this).prev().attr("id"), userInfo)

});


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

        $("#" + selectedInput).val(localStorage.getItem(selectedInput))
    });