$(document).ready(function(){
    
    $("#start-button").on("click", trivia.startGame);
})

var trivia = {
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    currentSet: 0,
    timer: 30,
    timerOn: false,
    timerId: "",

    options: {
        q1: ["Donald Trump", "Barack Obama", "Theodore Roosevelt", "John Adams"],
        q2: ["John F Kennedy", "George W Bush", "William H Harrison", "William McKinley"],
        q3: ["Andrew Jackson", "John F. Kennedy", "Bill Clinton", "George Washington"],
        q4: ["Harry Truman", "Andrew Jackson", "Abraham Lincoln", "Ulysses S Grant"],
        q5: ["John Adams", "John Quincy Adams", "Abraham Lincoln", "Thomas Jefferson"]
    },

    answers: {
        q1: "Donald Trump",
        q2: "William H Harrison",
        q3: "John F Kennedy",
        q4: "Abraham Lincoln",
        q5: "Thomas Jefferson"
    },

    startGame: function() {
        //reset
        trivia.currentSet = 0;
        trivia.correct = 0;
        trivia.incorrect = 0;
        trivia.unanswered = 0;
        clearInterval(trivia.timerId);
        //adding question options to html on start
        $("#q1-responses").append($('<option button class="btn btn-info btn-lg">' + trivia.options.q1[0] + '</button>'));
        $("#q1-responses").append($('<option button class="btn btn-info btn-lg">' + trivia.options.q1[1] + '</button>'));
        $("#q1-responses").append($('<option button class="btn btn-info btn-lg">' + trivia.options.q1[2] + '</button>'));
        $("#q1-responses").append($('<option button class="btn btn-info btn-lg">' + trivia.options.q1[3] + '</button>'));

        $("#q2-responses").append($('<option button class="btn btn-info btn-lg">' + trivia.options.q2[0] + '</button>'));
        $("#q2-responses").append($('<option button class="btn btn-info btn-lg">' + trivia.options.q2[1] + '</button>'));
        $("#q2-responses").append($('<option button class="btn btn-info btn-lg">' + trivia.options.q2[2] + '</button>'));
        $("#q2-responses").append($('<option button class="btn btn-info btn-lg">' + trivia.options.q2[3] + '</button>'));

        $("#q3-responses").append($('<option button class="btn btn-info btn-lg">' + trivia.options.q3[0] + '</button>'));
        $("#q3-responses").append($('<option button class="btn btn-info btn-lg">' + trivia.options.q3[1] + '</button>'));
        $("#q3-responses").append($('<option button class="btn btn-info btn-lg">' + trivia.options.q3[2] + '</button>'));
        $("#q3-responses").append($('<option button class="btn btn-info btn-lg">' + trivia.options.q3[3] + '</button>'));

        $("#q4-responses").append($('<option button class="btn btn-info btn-lg">' + trivia.options.q4[0] + '</button>'));
        $("#q4-responses").append($('<option button class="btn btn-info btn-lg">' + trivia.options.q4[1] + '</button>'));
        $("#q4-responses").append($('<option button class="btn btn-info btn-lg">' + trivia.options.q4[2] + '</button>'));
        $("#q4-responses").append($('<option button class="btn btn-info btn-lg">' + trivia.options.q4[3] + '</button>'));

        $("#q5-responses").append($('<option button class="btn btn-info btn-lg">' + trivia.options.q5[0] + '</button>'));
        $("#q5-responses").append($('<option button class="btn btn-info btn-lg">' + trivia.options.q5[1] + '</button>'));
        $("#q5-responses").append($('<option button class="btn btn-info btn-lg">' + trivia.options.q5[2] + '</button>'));
        $("#q5-responses").append($('<option button class="btn btn-info btn-lg">' + trivia.options.q5[3] + '</button>'));

        

        $("#game-timer").text(trivia.timer);
        
        if(!trivia.timerOn){
            trivia.timerId = setInterval(trivia.timerStart,1000);
            trivia.timerOn = true
            }
            
    //hide start button so gameStart can't be continually called
        $(".start").hide();
    },
    //start running timer and count score if time runs out
   timerStart: function(){
       trivia.timer--;
        $("#game-timer").text(trivia.timer);
        if (trivia.timer === 0){
            trivia.clearInterval;
        }
       
       
   }
   
   
    // guessChecker: function(){
       
    // var userGuess = $(".responses").push();}

       
   
   
   
   
   
   
   
   
   
    // timerRunning: function(){
    //     if (trivia.timer > -1){
    //         $("#game-timer").text(trivia.timer);
    //         trivia.timer--;
    //     }else if(trivia.timer === -1){
    //         trivia.unanswered++;
    //         trivia.result = false;
    //         clearInterval(trivia.timerId);
    //         resultId = setTimeout(trivia.guessResult, 1000)
    //     }
    // }
    
    
    
}


