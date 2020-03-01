$(document).ready(function() {
    $('#submit-button').on('click', function(){
        var burgerData = {
            burger_name: $('#new_burger').val().trim()
        }
        ///Sending the Post///
        $.ajax('/burger/create', {
            type:"POST",
            data: burgerData
        }).then(function(){
            console.log("Burger is created")
            location.reload()
        });
    })
})

/////For the devour button//////
$('.devour-button'.on('click', function(){
    var devourData = {
        id:$(this).attr('data-id')
    }

    $.ajax('/burger/eat', {
        type: "POST",
        data: devourData
    }).then(function(){
        console.log('YUMMMMMY!')
        location.reload()
    });
}));

$('.restore-button').on('click', function(){
    var restoreData = {
        id:$(this).attr('data-id')
    }
    $.ajax("/burger/restore", {
        type: "POST",
        data: restoreData
    }).then(function() {
        console.log("Don't take away my burger!!!")
        location.reload()
    });
});