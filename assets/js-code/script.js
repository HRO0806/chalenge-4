var startTime = 1;
var time = startTime * 60;
var startButtonEl = document.querySelector('button');
var timerEl = document.querySelector('#countdown');
var questionBlock = document.createElement('div');
var answer1 = document.createElement('button');
var answer2 = document.createElement('button');
var answer3 = document.createElement('button');
var answer4 = document.createElement('button');
var nextQuestion = document.createElement('button');
var questions = [
    'Which planet is closest to the sun?', 
    'Which planet is the largest?', 
    'How many planets are there in our solar system?', 
    'How far away is the sun from earth?', 
    "Which four planets are called the 'gas giants'?"
]

var points = []

//This function is the timer
var updateCountDown = function () {
    var timeLeft = Math.floor(time / 60);

    var seconds = time % 60;
    seconds = seconds < 1 ? '0' + seconds : seconds;

    timerEl.innerHTML = `${timeLeft}: ${seconds}`;
    time--;
};

var collectPoints = function () {

};

//This function generates the questions
var makeQuestion = function () {
    questionBlock.setAttribute('class', 'question');
    questionBlock.innerHTML = '<p>' + questions[0] + "</p>";
    
    answer1.setAttribute('class', 'answer');
    answer1.textContent = "Mars";

    answer2.setAttribute('class', 'answer');
    answer2.textContent = "Mercury";

    answer3.setAttribute('class', 'answer');
    answer3.textContent = "Pluto";

    answer4.setAttribute('class', 'answer');
    answer4.textContent = "Neptune";
    
    document.body.append(answer1);
    document.body.append(answer2);
    document.body.append(answer3);
    document.body.append(answer4);
    document.body.append(questionBlock);
};

var stageFive = function () {
    answer1.setAttribute('value', 'correct');
    answer2.setAttribute('value', 'wrong');
    answer3.setAttribute('value', 'wrong');
    answer4.setAttribute('value', 'wrong')
    questionBlock.innerHTML =  "<p>" + questions[4] + "</p>";
    answer1.textContent = "Jupiter, Saturn, Uranus, and Neptune";
    answer2.textContent = "Jupiter, Venus, Mars, and Neptune";
    answer3.textContent = "Mercury, Venus, Earth, and Mars";
    answer4.textContent = "Saturn, Mars, Uranus, and Venus";
    answer1.style.color = 'white';
    answer2.style.color = 'white';
    answer3.style.color = 'white';
    answer4.style.color = 'white';
    
    answer1.addEventListener('click', function () {
        if (answer1.value === 'correct') {
            answer1.style.color = "green";
            answer1.textContent = "correct";
            points.push(1);
        }
        else {
            answer1.textContent = "wrong";
            answer1.style.color = "yellow";
        }
    });
    
    answer2.addEventListener('click', function () {
        if (answer2.value === 'correct') {
            answer2.style.color = "green";
            answer2.textContent = "correct";
            points.push(1);
        }
        else {
            answer2.textContent = "wrong";
            answer2.style.color = "yellow";
        }
    });
    
    answer3.addEventListener('click', function () {
        if (answer3.value === 'correct') {
            answer3.style.color = "green";
            answer3.textContent = "correct";
            points.push(1);
        }
        else {
            answer3.textContent = "wrong";
            answer3.style.color = "yellow";
        }
    });
    
    answer4.addEventListener('click', function () {
        if (answer4.value === 'correct') {
            answer4.style.color = "green";
            answer4.textContent = "correct";
            points.push(1)
        }
        else {
            answer4.textContent = "wrong";
            answer4.style.color = "yellow";
        }
    });
};

var stageFour = function () {
    answer1.setAttribute('value', 'wrong');
    answer2.setAttribute('value', 'correct');
    answer3.setAttribute('value', 'wrong');
    answer4.setAttribute('value', 'wrong')
    questionBlock.innerHTML =  "<p>"+ questions[3] + "</p>";
    answer1.textContent = "2 miles";
    answer2.textContent = "93 million miles";
    answer3.textContent = "12 octllion miles";
    answer4.textContent = "8 billion miles";
    answer1.style.color = 'white';
    answer2.style.color = 'white';
    answer3.style.color = 'white';
    answer4.style.color = 'white';

    answer1.addEventListener('click', function () {
        if (answer1.value === 'correct') {
            answer1.style.color = "green";
            answer1.textContent = "correct";
            points.push(1);
        }
        else {
            answer1.textContent = "wrong";
            answer1.style.color = "yellow";
        }
        nextQuestion.addEventListener('click', function () {
            stageFive();
        })
    });
    
    answer2.addEventListener('click', function () {
        if (answer2.value === 'correct') {
            answer2.style.color = "green";
            answer2.textContent = "correct";
            points.push(1);
        }
        else {
            answer2.textContent = "wrong";
            answer2.style.color = "yellow";
        }
        nextQuestion.addEventListener('click', function () {
            stageFive();
        })
    });
    
    answer3.addEventListener('click', function () {
        if (answer3.value === 'correct') {
            answer3.style.color = "green";
            answer3.textContent = "correct";
            points.push(1)
        }
        else {
            answer3.textContent = "wrong";
            answer3.style.color = "yellow";
        }
        nextQuestion.addEventListener('click', function () {
            stageFive();
        })
    });
    
    answer4.addEventListener('click', function () {
        if (answer4.value === 'correct') {
            answer4.style.color = "green";
            answer4.textContent = "correct";
            points.push(1);
        }
        else {
            answer4.textContent = "wrong";
            answer4.style.color = "yellow";
        }
        nextQuestion.addEventListener('click', function () {
            stageFive();
        })
    });
};

var stageThree = function () {
    answer1.setAttribute('value', 'correct');
    answer2.setAttribute('value', 'wrong');
    answer3.setAttribute('value', 'wrong');
    answer4.setAttribute('value', 'wrong');
    questionBlock.innerHTML =  "<p>" + questions[2] + "</p>";
    answer1.textContent = "8";
    answer2.textContent = "11";
    answer3.textContent = "9"
    answer4.textContent = "7";
    answer1.style.color = 'white';
    answer2.style.color = 'white';
    answer3.style.color = 'white';
    answer4.style.color = 'white';

    
    answer1.addEventListener('click', function () {
        if (answer1.value === 'correct') {
            answer1.style.color = "green";
            answer1.textContent = "Correct";
            points.push(1);
        }
        else {
            answer1.textContent = "wrong";
            answer1.style.color = "yellow";
        };
        nextQuestion.addEventListener('click', function () {
            stageFour();
        })
    });
    
    answer2.addEventListener('click', function () {
        if (answer2.value === 'correct') {
            answer2.style.color = "green";
            answer2.textContent = "Correct";
            points.push(1);
        }
        else {
            answer2.textContent = "wrong";
            answer2.style.color = "yellow";
        }
        nextQuestion.addEventListener('click', function () {
            stageFour();
        })
    });
    
    answer3.addEventListener('click', function () {
        if (answer3.value === 'correct') {
            answer3.style.color = "green";
            answer3.textContent = "correct";
            points.push(1);
        }
        else {
            answer3.textContent = "wrong";
            answer3.style.color = "yellow";
        }
        nextQuestion.addEventListener('click', function () {
            stageFour();
        })
    });
    
    answer4.addEventListener('click', function () {
        if (answer4.value === 'correct') {
            answer4.style.color = 'green';
            answer4.textContent = "correct";
            points.push(1);
        }
        else {
            answer4.textContent = "wrong";
            answer4.style.color = "yellow";
        }
        nextQuestion.addEventListener('click', function () {
            stageFour();
        })
    });
};

var stageTwo = function () {
    answer1.setAttribute('value', 'wrong');
    answer2.setAttribute('value', 'wrong');
    answer3.setAttribute('value', 'correct');
    answer4.setAttribute('value', 'wrong')
    questionBlock.innerHTML =  "<p>" + questions[1] + "</p>";
    answer1.textContent = "Uranas";
    answer2.textContent = "Mars";
    answer3.textContent = "Jupiter";
    answer4.textContent = "Saturn";
    answer1.style.color = 'white';
    answer2.style.color = 'white';
    answer3.style.color = 'white';
    answer4.style.color = 'white';
    
    answer1.addEventListener('click', function () {
        if (answer1.value === 'correct') {
            answer1.style.color = "green";
            answer1.textContent = "Correct";
            points.push(1);
        }
        else {
            answer1.textContent = "wrong";
            answer1.style.color = "yellow";
        }
        nextQuestion.addEventListener('click', function () {
            stageThree();
        })
    });
    
    answer2.addEventListener('click', function () {
        if (answer2.value === 'correct') {
            answer2.style.color = "green";
            answer2.textContent = 'correct';
            points.push(1);
        }
        else {
            answer2.textContent = "wrong";
            answer2.style.color = "yellow";
        }
        nextQuestion.addEventListener('click', function () {
            stageThree();
        })
    });
    
    answer3.addEventListener('click', function () {
        if (answer3.value === 'correct') {
            answer3.style.color = "green";
            answer3.textContent = "correct";
            points.push(1);
        }
        else {
            answer3.textContent = "wrong";
            answer3.style.color = "yellow";
        }
        nextQuestion.addEventListener('click', function () {
            stageThree();
        })
    });
    
    answer4.addEventListener('click', function () {
        if (answer4.value === 'correct') {
            answer4.style.color = "green";
            answer4.textContent = "correct";
            points.push(1);
        }
        else {
            answer4.textContent = "wrong";
            answer4.style.color = "yellow";
        }
        nextQuestion.addEventListener('click', function () {
            stageThree();
        })
    });
};

var stageOne = function () {
    answer1.setAttribute('value', 'wrong');
    answer2.setAttribute('value', 'correct');
    answer3.setAttribute('value', 'wrong');
    answer4.setAttribute('value', 'wrong');

    answer1.addEventListener('click', function () {
        if (answer1.value === 'correct') {
            answer1.style.color = "green";
            answer1.textContent = "correct";
            points.push(1);
        }
        else {
            answer1.textContent = "wrong";
            answer1.style.color = "yellow";
        }
        nextQuestion.addEventListener('click', function () {
            stageTwo();
        })
    });

    answer2.addEventListener('click', function () {
        if (answer2.value === 'correct') {
            answer2.style.color = "green";
            answer2.textContent = 'correct';
            points.push(1);
        }
        else {
            answer2.textContent = "wrong";
            answer2.style.color = "yellow";
        }
        nextQuestion.addEventListener('click', function () {
            stageTwo();
        })
    });

    
    answer3.addEventListener('click', function () {
        if (answer3.value === 'correct') {
            answer3.style.color = "green";
            answer3.textContent = 'Correct';
            points.push(1);
        }
        else {
            answer3.textContent = "wrong";
            answer3.style.color = "yellow";
        }
        nextQuestion.addEventListener('click', function () {
            stageTwo();
        })
    });
    
    answer4.addEventListener('click', function () {
        if (answer4.value === 'correct') {
            answer4.style.backgroundColor = "green";
            answer4.textContent = "Correct";
            points.push(1);
        }
        else {
            answer4.textContent = "wrong";
            answer4.style.color = "yellow";
        }
        nextQuestion.addEventListener('click', function () {
            stageTwo();
        })
    });
};

//This function runs the timer when the start button is clicked
startButtonEl.addEventListener('click', function () {
    setInterval(updateCountDown, 1000);
    startButtonEl.remove();
    makeQuestion();

    nextQuestion.setAttribute('class', 'answer');
    nextQuestion.setAttribute('id', 'test');
    nextQuestion.textContent = 'Next Question';
    document.body.append(nextQuestion);
});

stageOne();