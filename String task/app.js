let word = "JavaScript";
console.log ( word.charAt(3));


let sentence = "This is a simple sentence.";
console.log (sentence.indexOf("is"));


let sentenceOne = "This is a sample sentence.";
console.log (sentenceOne.split(" "))


let phrase = "Programming is fun!";
console.log (phrase.substring(0,12))


let phraseOne = "Programming is fun!"; 
console.log (phrase.substring(15,18))





//Write a method that reverses the given expression
function reverseString(inputString) {
    return inputString.split('').reverse().join('');
}

let originalString = "Hello, World!";
let reversedString = reverseString(originalString);

console.log(reversedString);

//Write a method that capitalizes the first letters of the given expression and write a method that reverses it
function capitalizeFirstLetters(sentence2) {
    const words = sentence2.split(' ');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const capitalizedSentence = capitalizedWords.join(' ');
    return capitalizedSentence;
  }
  
  function reverseSentence(sentence2) {
    const characters = sentence2.split('');
    const reversedCharacters = characters.reverse();
    const reversedSentence = reversedCharacters.join('');
    return reversedSentence;
  }
  let sentence2 = "javascript is fun";
  let capitalizedResult = capitalizeFirstLetters(sentence2);
   console.log("Capitalized: ", capitalizedResult);
  let reversedResult = reverseSentence(sentence2);
   console.log("Reversed: ", reversedResult);


   //Write a method that finds the bold vowels in the given sentence
   const countVowels = text => {
    let count = 0
    const vowels = ["a", "e", "i", "o", "u"]
    for (let char of text.toLowerCase()){
      if (vowels.includes(char)) {
        count++
      }
    }
     return count
   }
  console.log(countVowels("JavaScript is awesome!"));






   //Write a method that finds the longest word in a given sentence
   function longestWord(str) {
       let longestWord = " ";
       const words = str.split(' ');

    words.forEach ((word) => {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    })

    return longestWord;
}
    console.log(longestWord("This is a sample sentence with long words."));