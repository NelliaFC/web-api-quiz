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

/* set up eventListener function on Click*/
document.addEventListener('click', function (event) {
   if (event.target ===btnElement) {
    wrapperElement.style.display = "none";
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
/**function to show the last page  */
function renderLastItem() {
    var yourScore = localStorage.getItem("HighScores");
     var yourInitial = localStorage.getItem("Initial");
     if (yourScore && yourInitial === "") {
        return
    }
    finishDiv.textContent = "";
    var finaPageEl = document.querySelector(".final-page");
    finaPageEl.style.visibility = "visible";
    var initialAndScore = document.querySelector("#staticEmail");
    initialAndScore.value = yourInitial + ":" + " " + yourScore;

}
  /*create a function that stores final score */
document.addEventListener("submit", function (event) {
    event.preventDefault();
    var initialInput = document.querySelector("#inputInitial").value;
    if (initialInput === "") {
        errMsg.setAttribute("style", "color: red")
        errMsg.textContent = "Initial input field cannot be empty"
    } else {
        errMsg.textContent = "";
        localStorage.getItem(initialInput)
        localStorage.setItem("Initial", initialInput)
         renderLastItem()
    }

})
/*create function to refresh the page and send the user back */
function init() {
     location.reload();
 
}
/*Create function to clear score */
function clearScore() {
    initialAndScore.value = "";
}

  