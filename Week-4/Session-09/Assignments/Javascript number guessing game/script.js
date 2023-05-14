function playGuessingGame(numToGuess, totalGuesses = 10) {
    let guesses = 0;
    while (guesses < totalGuesses) {
      let guess = prompt(getPromptText(guesses));
      if (guess === null) {
        return 0;
      } else if (guess.trim() === "" || isNaN(guess)) {
        alert("Please enter a number.");
        continue;
      }
      guesses++;
      let guessNumber = parseInt(guess);
      if (guessNumber < numToGuess) {
        alert(guessNumber + " is too small. Guess a larger number.");
      } else if (guessNumber > numToGuess) {
        alert(guessNumber + " is too large. Guess a smaller number.");
      } else {
        return guesses;
      }
    }
    return 0;
  }
  
  function getPromptText(guesses) {
    if (guesses === 0) {
      return "Enter a number between 1 and 100.";
    } else {
      return "Please enter another number.";
    }
  }
  
playGuessingGame(5);
playGuessingGame(7, 3);
