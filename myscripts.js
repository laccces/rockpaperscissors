

const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
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
            return 'Sorry, you lose.'
        } else {
            return 'You win!'
        }   
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'Sorry, you lose.'
        } else {
            return 'You win!'
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'You win!'
        } else {
            return 'Sorry, you lose.'
        }
    }
}

const playGame = () => {
    const userChoice = getUserChoice('Paper');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('Computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame ();
