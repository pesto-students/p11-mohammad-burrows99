function calcWordFrequencies() {
    const wordMap = new Map();
    const words = prompt("Enter a list of words separated by spaces:");
    
    // Split the input string into an array of words
    const wordArray = words.split(" ");
  
    // Iterate over each word in the array
    for (const word of wordArray) {
      // If the word is already in the map, increment its frequency
      if (wordMap.has(word)) {
        wordMap.set(word, wordMap.get(word) + 1);
      }
      // If the word is not in the map, add it with a frequency of 1
      else {
        wordMap.set(word, 1);
      }
    }
  
    // Output the word frequencies to the console
    for (const [word, frequency] of wordMap) {
      console.log(`${word} ${frequency}`);
    }
  }

  calcWordFrequencies();
  