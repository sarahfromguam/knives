function display_home(id){
  // populate new data
  // set correct_answers to 0 and update server.py via ajax
}

function display_mc_pic_question(id){
  // populate new data
}

function display_mc_pic_question_correct(id){
  // populate new data
  // When the answer is correct, we need to call the update_correct_answer function
}

function display_mc_pic_question_wrong(id){
  // populate new data
}

function display_mc_word_question(id){
  // populate new data
}

function display_mc_word_question_correct(id){
  // populate new data
  // When the answer is correct, we need to call the update_correct_answer function
}

function display_mc_word_question_wrong(id){
  // populate new data
}

function display_tf_question(id){
  // populate new data
}

function display_tf_question_correct(id){
  // populate new data
  // When the answer is correct, we need to call the update_correct_answer function

}

function display_tf_question_wrong(id){
  // populate new data
}

function update_correct_answer(correct_answers) {
  $.ajax({
      type: "POST",
      url: "/update_correct_answer",
      dataType : "json",
      contentType: "application/json; charset=utf-8",
      data : JSON.stringify(correct_answers),
      success: function(result){
          let correct_answers_new = result["correct_answers"];
          // update correct_answers in quiz.html?
          correct_answers = correct_answers_new;
      },
      error: function(request, status, error){
          console.log("Error");
          console.log(request)
          console.log(status)
          console.log(error)
      }
  });
}


$(document).ready(function(){
  // depending on value from id, go to entry in quiz_data, find the "type" for the data entry, and call the write function to display it (e.g. if the "type" is "mc_pic", call the display_mc_pic_question(id))
})
