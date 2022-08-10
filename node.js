////////////// August 10, 2022 /////////////////

// Palindrome Challenge

const letters = [];
let wordReversed = "";

function palindrome(word) {
  for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
  }

  for (let i = 0; i < word.length; i++) {
    wordReversed += letters.pop();
  }

  if (wordReversed === word) {
    console.log(`${word} is a palindrone.`);
  } else {
    console.log(`${word} is NOT a palindrone`);
  }
}
palindrome("racecar");
