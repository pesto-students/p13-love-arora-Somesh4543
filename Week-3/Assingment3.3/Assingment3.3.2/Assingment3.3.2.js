function playGuessingGame(numToGuess, totalGuesses = 10) {
    let guessCount = 0;

    while (guessCount < totalGuesses) {
        let promptText;

        if (guessCount === 0) {
            promptText = "Enter a number between 1 and 100.";
        } else if (guessCount > 0) {
            let prevGuess = prompt("Enter your previous guess:");
            if (isNaN(prevGuess)) {
                promptText = "Please enter a number.";
            } else {
                prevGuess = parseInt(prevGuess);
                if (prevGuess < numToGuess) {
                    promptText = `${prevGuess} is too small. Guess a larger number.`;
                } else if (prevGuess > numToGuess) {
                    promptText = `${prevGuess} is too large. Guess a smaller number.`;
                }
            }
        }

        let userGuess = prompt(promptText);
        
        if (userGuess === null) {
            return 0;
        }

        if (isNaN(userGuess)) {
            console.log("Please enter a number.");
            continue;
        }

        userGuess = parseInt(userGuess);
        guessCount++;

        if (userGuess === numToGuess) {
            console.log(`Congratulations! You guessed the correct number ${numToGuess} in ${guessCount} tries.`);
            return guessCount;
        }
    }

    console.log(`Sorry, you've run out of guesses. The correct number was ${numToGuess}.`);
    return 0;
}

// Example usage
playGuessingGame(5);