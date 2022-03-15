let pScore = 0;
let cScore = 0;

function game () {

    const computerChoiceDisplay = document.getElementById('computer-choice')
    const userChoiceDisplay = document.getElementById('user-choice')
    const resultsDisplay = document.getElementById('result')
    const possibleChoices = document.querySelectorAll('button')

    let userChoice
    let computerChoice
    let result

    possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
        userChoice = e.target.id
        userChoiceDisplay.innerHTML = userChoice
        getComputerChoice()
        getResult()
    }));

    const getComputerChoice = () => {
        const randomNumber = Math.floor(Math.random() * 3) + 1;
        
        if(randomNumber === 1) {
            computerChoice = 'rock'
        }
        if(randomNumber === 2) {
            computerChoice = 'scissors'
        }
        if(randomNumber === 3) {
            computerChoice = 'paper'
        }
        computerChoiceDisplay.innerHTML = computerChoice
    };

    function getResult() {
        if (computerChoice === userChoice) {
            result = 'its a draw!'
        }
        if(computerChoice === 'rock' && userChoice === 'paper') {
            result = 'you win!';
            pScore++;
            updateScore();
        }
        if(computerChoice === 'rock' && userChoice === 'scissors') {
            result = 'you lose!';
            cScore++;
            updateScore();
        }
        if(computerChoice === 'paper' && userChoice === 'scissors') {
            result = 'you win!';
            pScore++;
            updateScore();
        }
        if(computerChoice === 'paper' && userChoice === 'rock') {
            result = 'you lose!';
            cScore++;
            updateScore();
        }
        if(computerChoice === 'scissors' && userChoice === 'rock') {
            result = 'you win!';
            pScore++;
            updateScore();
        }
        if(computerChoice === 'scissors' && userChoice === 'paper') {
            result = 'you lose!';
            cScore++;
            updateScore();
        }
        resultsDisplay.innerHTML = result
    }

}

game();

const updateScore = () => {
    const playerScore = document.getElementById('your-score')
    const computerScore = document.getElementById('computer-score')
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
}
/*
const finalScore = () => {
    const finalResult = document.getElementById('final-score') {
    
    
        finalResult.textContent = 'You win!'
    }
    if(cScore > pScore) {
        finalResult.textContent = 'You lose!'
    } else {
        finalResult.textContent = 'Draw'
    }
}
}

finalScore();
*/