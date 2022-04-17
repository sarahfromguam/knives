$(document).ready(function() {
  console.log("entered document .")
  // console.log(store)
  update_learning(information)
  // console.log(information)
  displayKnifeRow(allKnives)
})

function displayKnifeRow(knives){
  for (knife of knives){
    let imgSrc = knife["image"];
    let imgHtml = $('<input type="image"  id="saveform" src='+imgSrc+'alt="Submit Form" />');
    $('#knifeRow').append(imgHtml);
  }
}

function update_learning(information) {
  // include an if statement of "if URL is learn/0, disable the back button (cause there is no where else to go... else do below"
  $(backButton).click(function() {
    if (information["prevLesson_id"] == -1) {
      window.location.href = '/'
    } else {
      window.location.href = '/learn/' + information["prevLesson_id"]
    }
  })
  // include if statement of "if URL is learn/9 disable the next button and change the button to quiz yourself....else go below"
  $(nextButton).click(function() {
    window.location.href = '/learn/' + information["nextLesson_id"]
  })
}
