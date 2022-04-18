$(document).ready(function(){
    display_learning(information)
})

function display_learning(information){
    console.log(information)
    var newRow = $('<div class="row">')
    $.each(information, function(index, information) {
        var id_number = information["id"]
        console.log(id_number)
        var image_link = information["image"]
        var knife_name = information["name"]
        console.log(image_link) 
    })
    $(learn).click(function(){
        window.location.href = '/learn/0' 
    })
}
