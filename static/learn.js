$(document).ready(function() {
  // console.log("entered document .")
  // console.log(store)
  // console.log(information)
  update_learning(information)
  if (information["lesson_id"] == 0) {
    $("#backButton").html('← All Knives');
  }

  if (information["lesson_id"] == 9) {
    $("#nextButton").html('QUIZ! →');
  }
})


const host = "http://127.0.0.1:5500/";

// JAVASCRIPT FOR INDEX PAGE

function update_learning(information) {
  // include an if statement of "if URL is learn/0, disable the back button (cause there is no where else to go... else do below"
  $("#backButton").click(function() {
    if (information["prevLesson_id"] == -1) {
      window.location.href = '/home'
    }
    else {
      window.location.href = '/learn/' + information["prevLesson_id"]
    }
  })
  // include if statement of "if URL is learn/9 disable the next button and change the button to quiz yourself....else go below"
  $("#nextButton").click(function() {
    if (information["lesson_id"] == 9 || information["lesson_id"] == 10){
      console.log('BUTTON TRIGGERED')
      window.location.href = '/quiz'
    } else {
      window.location.href = '/learn/' + information["nextLesson_id"]
    }

  })

  console.log(information)
  var newRow = $('<div class="row">')
  $.each(information, function(index, information) {
      var id_number = information["id"]
      console.log(id_number)
      var image_link = information["image"]
      var knife_name = information["name"]
      var ht = information["ht"]
      console.log(image_link)
  })
}
