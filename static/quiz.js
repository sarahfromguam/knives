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
  if(id === null){
    // quiz home
    $('body').addClass('align-items-center text-center justify-content-center')
    let text = $('<div>').append('<div>Are you the sharpest knife in the drawer?<div>').addClass('m-5')
    $('body').append(text)
    let but = $('<div>').append('<button type="button" class="btn btn-primary start-quiz">Primary</button>').addClass('m-5')
    $('body').append(but)
    $( ".start-quiz" ).click(function() {
      window.location.href = '/quiz/1'
    });
  }else{
    $('body').addClass('align-items-center text-center justify-content-center')
    //display questions
    let question = $('<div>').append(quiz_data[id]['question']).addClass('font-weight-bold')
    $('body').append(question)
    let images = []
    images[0] = $('<img>').attr('src',quiz_data[id]['op1_pic']).addClass('col-md-4').height(400)
    images[1] = $('<img>').attr('src',quiz_data[id]['op2_pic']).addClass('col-md-4').height(400)
    images[2] = $('<img>').attr('src',quiz_data[id]['op3_pic']).addClass('col-md-4').height(400)
    
    let buttons = []
    buttons[0] = $('<button>').append(quiz_data[id]['op1']).addClass('btn btn-primary op1')
    buttons[1] = $('<button>').append(quiz_data[id]['op2']).addClass('btn btn-primary op2')
    buttons[2] = $('<button>').append(quiz_data[id]['op3']).addClass('btn btn-primary op3')

    row1 = $('<div>').addClass('row h-25 p-2 ')
    for(i = 0;i<3;i++){
      $(row1).append(images[i])
    }
    row2 = $('<div>').addClass('row h-25 p-2')
    for(i = 0;i<3;i++){
      $(row2).append(buttons[i])
    }
    $('body').append(row1)
    $('body').append(row2)

    /* $( "op1" ).click(function() {
      if(quiz_data[id]['answer']==='op1'){

      }
    }); */
    
    //temporary cycle through questions
    row3 = $('<div>').addClass('row h-25')
    next_q = $('<button>').append('Next question').addClass('btn btn-dark').attr('id','next')
    $(row3).append(next_q)
    $('body').append(row3)
    $( "#next" ).click(function() {
      window.location.href = '/quiz/' + (parseInt(id)+1);
    });
  }
})
