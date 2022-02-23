let pScore = 0;
let cScore = 0;

const getUserChoice = (userInput) => {
   userInput = prompt("Rock, Paper or Scissors?").toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
        return userInput
    } else {
        console.log('Incorrect input!')
    }
}

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    };
};

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'You draw!';
    };
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            cScore++;
            return 'Sorry, you lose.'
        } else {
            pScore++;
            return 'You win!'
        }   
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
            cScore++;
            return 'Sorry, you lose.'
        } else {
            pScore++;
            return 'You win!'
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            pScore++;
            return 'You win!'
        } else {
            cScore++;
            return 'Sorry, you lose.'
        }
    }
}

const game = () => {
    const playGame = () => {
        const userChoice = getUserChoice('Paper');
        const computerChoice = getComputerChoice();
        console.log('You threw: ' + userChoice);
        console.log('Computer threw: ' + computerChoice);
        console.log(determineWinner(userChoice, computerChoice));
    };

    playGame ();
    
}

for(let i = 0; i < 5; i++) {
    console.log(game)
    console.log('Player Score ' + pScore)
    console.log('Computer Score ' + cScore)

game ();

console.log('Final Player score ' + pScore)
console.log('Final Computer Score ' + cScore)

const finalScore = () => {
    if (pScore > cScore) {
        console.log('YOU WIN!!!')
    }
    if (pScore === cScore) {
        console.log('DRAW')
    } else {
        console.log('You lost :(')
    }

}

finalScore ();

}
