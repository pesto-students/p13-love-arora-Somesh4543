function calcWordFrequencies() {
  const input = prompt("Enter a list of words separated by spaces:");

  if (!input) {
    console.log("No input provided.");
    return;
  }

  const words = input.split(" ");

  const wordFrequencyMap = new Map();

  for (const word of words) {
    const lowercaseWord = word.toLowerCase();

    if (!wordFrequencyMap.has(lowercaseWord)) {
      wordFrequencyMap.set(lowercaseWord, 1);
    } else {
      wordFrequencyMap.set(
        lowercaseWord,
        wordFrequencyMap.get(lowercaseWord) + 1
      );
    }
  }

  for (const [word, frequency] of wordFrequencyMap) {
    console.log(`${word} ${frequency}`);
  }
}

calcWordFrequencies();
