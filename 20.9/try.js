function countLetters(array) {
    const letterCount = {};
  
    for (const str of array) {
      const letters = str.toLowerCase().replace(/[^a-z]/g, '');
  
      for (const letter of letters) {
        if (letterCount[letter]) {
          letterCount[letter]++;
        } else {
          letterCount[letter] = 1;
        }
      }
    }
  
    return letterCount;
  }
  
  const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
  const result = countLetters(array);
  
  console.log(result);
  