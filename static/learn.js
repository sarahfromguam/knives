$(document).ready(function() {
  // console.log("entered document .")
  // console.log(store)
  // console.log(information)
  update_learning(information)

})


const host = "http://127.0.0.1:5500/";

$(document).ready(function() {
  // console.log("entered document .")
  // console.log(store)
  // console.log(information)
  displayKnifeRow(information)

})



// JAVASCRIPT FOR INDEX PAGE

function displayKnifeRow(knives){
    for (knife of knives){
      let imgSrc = knife["image"];
      let imgID = knife["lesson_id"];
      let imgHtml = $('<a href="/learn/'+imgID+'"><input type="image" class="knifeRowImg" src='+imgSrc+' alt="Submit Form" /></a>');
      // let imgHtml = $('<input type="image" class="knifeRowImg" src="../static/imgs/butter_knife.png" alt="Butter Knife" />');
      $('#knifeRow').append(imgHtml);
    }
}


function update_learning(information) {
  // include an if statement of "if URL is learn/0, disable the back button (cause there is no where else to go... else do below"
  $("#backButton").click(function() {
    console.log('BUTTON TRIGGERED')
    if (information["prevLesson_id"] == -1) {
      window.location.href = '/'
    } else if (information["nextLesson_id"] == -2){
      window.location.href = '/quiz/0'
    }
    else {
      window.location.href = '/learn/' + information["prevLesson_id"]
    }
  })
  // include if statement of "if URL is learn/9 disable the next button and change the button to quiz yourself....else go below"
  $("#nextButton").click(function() {
    console.log('BUTTON TRIGGERED')
    window.location.href = '/learn/' + information["nextLesson_id"]
  })
}
