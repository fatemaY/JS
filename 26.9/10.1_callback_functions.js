function isString(str, callback) {
  if (typeof str === "string") {
    callback(str);
  } 
  else {
    console.log("The " + str + " is not a string.");
  }
}
function printString(string) {
  console.log(string);
}

isString("Hello, world!", printString); 
isString(42, printString);              


function firstWordUpperCase(sentence, callback, personalcallback) {
    var words = sentence.split(' ');
    if (words.length > 0) {
      words[0] = words[0].toUpperCase()
    }
    callback(words);
    personalcallback(words);
  }
  
  function dashesBetween(sentence) {
    const newSentence = sentence.join('-');
    console.log(newSentence);
  }

  function callNew(words) {
    let i=0;
    for(let j=0 ;j<words.length;j++){
         words[j]=words[j][0].toUpperCase() + words[j].slice(1);
         i++;
    }
    const newSentence = words.join(' ');
    console.log("Our new sentence: " + newSentence + " with " + i + " words .");
  }

  firstWordUpperCase("this is an appleSeeds course!", dashesBetween,callNew);



  function function3 (sentence,callback){
    if(sentence.length>0){
        callback(sentence);
    }
  }
  function countLetters(sentence) {
    const lettersOnly = sentence.replace(/[^a-zA-Z]/g, '');
    const letterCount = lettersOnly.length;
    console.log("The sentence: " + sentence + " it has a: " + letterCount + " letters .");
  }
  function3("this is an appleSeeds course!", countLetters);



  