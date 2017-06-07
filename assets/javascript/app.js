//Quiz Variables
var questionCount = 0;
var correct = 0;
var incorrect = 0;
var unanswered = 0;

//show and hide elements

function show(){
	var reveal = document.getElementById('jumbotron');
	if (reveal.style.display === 'none'){
			reveal.style.display = 'block';
	} else {
		reveal.style.display = 'none';
	}
}


//answers

 	if(document.getElementById('1d').checked){
      correct++;
    } else if (document.getElementById('1a').checked ||document.getElementById('1b').checked  
      || document.getElementById('1c').checked){
      incorrect++;
    } else {
      unanswered++;
    }

    if(document.getElementById('2a').checked){
      correct++;
    } else if (document.getElementById('2b').checked ||document.getElementById('2c').checked  
      || document.getElementById('2d').checked){
      incorrect++;
    } else {
      unanswered++;
    }

    if(document.getElementById('3c').checked){
      correct++;
    } else if (document.getElementById('3a').checked ||document.getElementById('3b').checked  
      || document.getElementById('3d').checked){
      incorrect++;
    } else {
      unanswered++;
    }

    if(document.getElementById('4c').checked){
      correct++;
    } else if (document.getElementById('4a').checked ||document.getElementById('4b').checked  
      || document.getElementById('4d').checked){
      incorrect++;
    } else {
      unanswered++;
    }

    if(document.getElementById('5c').checked){
      correct++;
    } else if (document.getElementById('5a').checked ||document.getElementById('5b').checked  
      || document.getElementById('5d').checked){
      incorrect++;
    } else {
      unanswered++;
    }

    if(document.getElementById('6d').checked){
      correct++;
    } else if (document.getElementById('6a').checked ||document.getElementById('6b').checked  
      || document.getElementById('6c').checked){
      incorrect++;
    } else {
      unanswered++;
    }

//results

var feedback = $("div");
      feedback.addClass("score");
      $("#score").append(feedback);
      feedback.html("You did aight, but you ain't love Kanye like Kanye." + "<br>" 
        + "Correct answers:  " + correct + "<p>"
        + "Incorrect answers: " + incorrect + "<p>"
        + "Unanswered questions:  " + unanswered + "<p>");

