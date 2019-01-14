$(document).ready(function(){
    
    $("start-button").on("click", trivia.startGame);
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
    }

    answers: {
        
    }
}

