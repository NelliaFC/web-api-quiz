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
/*