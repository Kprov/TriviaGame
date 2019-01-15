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
        //adding first question options to html
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


        $("#results").html("");

        $("#game-timer").text(trivia.timer);

        $("#start-buton").hide();
    }
    
    
    
}


