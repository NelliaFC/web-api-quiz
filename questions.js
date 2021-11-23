/*setting timer*/

var timer = 60;
var timeCount;

/*set up timer to count off from the start of the quiz*/

function setupTimer() {
    timeCount = setInterval(function () {
        timer--;
        var timeReset = timeElement.textContent = "Time:" + " " + timer;
       timer = timer;
        if (timer <= 0) {         
            clearInterval(timeCount);
              
            timeElement.textContent = timeReset;
             
        }
    }, 1000)
}

/* set up eventListener function fro on Click*/
document. addEventListener('click', function (event) {
   if (event.target ===btnElement) {
    wrapperElement.style.display = 'none';
    setupTimer();
    dislayQuestions();
}
})

/*On click handler function*/
/*Create a function to display each question on click of the button*/

var i = 0;
function onclickHandler(event) {
    if(timer<=0){
        clearInterval(timeCount);
        divContEL.style.display="none";
        displayResult();
    }
    var answerText = event.target.textContent 
    if (answerText === questions[i].answer) {
        timer = timer;
        responsDiv.setAttribute("style", "color: green")
        responsDiv.textContent = "Correct";
    } else {

        responsDiv.setAttribute("style", "color: red")
        responsDiv.textContent = "Wrong";
        timer = timer - 15;
     }
    
     if  (i<questions.length-1) {
        i++;

        setTimeout(function () {
        displayQuestions();
        responsDiv.textContent = "";
      }, 1000)
      }else {
          setTimeout(function () {
              responsDiv.textContent = "";
              displayResult();
              clearInterval(timeCount);
            
          }, 500)
      
  
          divContEL.innerHTML = '';
     }
     /*Create a function for final score */
 
 function displayResult() {
    finishDiv.style.visibility = "visible";
    timeElement.textContent = "Time:" + " " + timer;
    var HighScores = timer;
    localStorage.getItem(HighScores)
    finalScore.textContent = "Your finally score is: " + HighScores;
     localStorage.setItem("HighScores", HighScores)

}
}

   