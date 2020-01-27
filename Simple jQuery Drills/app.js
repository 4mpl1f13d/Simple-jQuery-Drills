$(document).ready(function () {

    //Text Alert
    $('#btnSubmit').click(function () {
        alert("The Button was clicked!");
        alert($('#textID').val());


    })

    //Button Enabled / Disabled
    $('#textID').keyup(() => {
        if ($('#textID').val() === "") {
            $('#btnSubmit').attr('disabled', true);
        }
        else {
            $('#btnSubmit').attr('disabled', false);
        }



    });


});
