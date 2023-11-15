function getLastIndexOfWord(sentence, word) {
    return sentence.lastIndexOf(word);
  }
  
  // Example usage:
  const string = "The more you know, the more you know that you don't know";
  var wordToFind = "you";
  var lastIndex = getLastIndexOfWord(string, wordToFind);
  
  console.log("Last occurrence of '" + wordToFind + "' is at index " + lastIndex);
  