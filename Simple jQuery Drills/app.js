$(document).ready(function () {

    //Button Enabled OR Disabled via type
    $('#textID').keyup(() => {
        if ($('#textID').val() === "") {
            $('#btnSubmit').attr('disabled', true);
        }
        else {
            $('#btnSubmit').attr('disabled', false);
        }

    });


    //Text Alert
    $('#btnSubmit').click(function () {
        //Prevents page refresh
        event.preventDefault();
        // alert("The Button was clicked!");
        // alert($('#textID').val());

        // H2
        // let insertText = $('#textID').val();
        // let h2 = $('<h2></h2>');
        // h2.text(insertText);
        // $(".divClass").append(h2);

        // //When the user mouses over the h2 element, assign it a new background color and border radius.
        // $('h2').mouseover(function () {
        //     $(this).css({
        //         'background-color': 'darkblue',
        //         'border-Radius ': '25px'
        //     });
        // });

        // Use jQuery to create an unordered list and append it to the body When the user submits the form, append the text as list item to the unordered list

        let colorArray = ["#C2272D", "#db7c0f", "#FFFF01", "#009245", "#91c3db", "#ca04ed", "#612F90", "#aeff00"]
        function generateRandomColor() {
            return Math.floor((Math.random() * 8));
        };

        let insertLi = $('#textID').val();
        let li = $('<li></li>');
        li.text(insertLi);
        $(".ulClass").append(li);

        $('li').click(function () {
            let randomNumber = generateRandomColor();
            $(this).css({
                'color': colorArray[randomNumber]
            });
        });

        $('li').dblclick(function () {
            $(this).remove();
        });


    });



    // // Append div to body
    // $("body").append($("<div class='divClass'></div>"));

    // Append ul to body
    $("body").append($("<ul class='ulClass'></ul>"));


});
