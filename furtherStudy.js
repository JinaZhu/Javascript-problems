"use strict";

let words = ['apple', 'banana', 'cherry', 'grapes', 'mango', 'mango']
let words2 = ['pineapple', 'banana', 'cherry', 'orange', 'mango']

function wordsInCommon(words1, words2) {
  // Replace this with your code

  const words1Set = new Set(words1)
  const words2Set = new Set(words2)

  const result = []

  for(let word of words1Set) {
    if (words2Set.has(word)) {
      result.push(word)
    }
  }
  return Array.from(result); 
}


// function kidsGame(names) {
//   // Replace this with your code
// }

const kidsGame = (names) => {

  let output = [names.pop(0)]
  console.log(output);

  let first_letter_to_words = {}

  for(const name of names) {
    if (first_letter_to_words[name[0]] === undefined) {
      first_letter_to_words[name[0]] = [name];
    }
    else {
      first_letter_to_words[name[0]].push(name);
    }
  }



  while (true) {
    let lastWord = output[output.length - 1];
    console.log(lastWord)
    let startLetter = lastWord
    console.log(startLetter)

    if (first_letter_to_words[startLetter] === undefined) {
      break; 
    }

    let word = first_letter_to_words[startLetter].pop(0);

    output.push(word);
  }
  console.log(first_letter_to_words)
  console.log(output);
  return output; 

}

let game = ["bagon", "baltoy", "yamask", 
  "starly","nosepass", "kalob", "nicky", "booger"]

kidsGame(game); 