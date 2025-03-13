// Code your solutions in this file
// index.js

// Function to generate thank you cards for each name
function writeCards(names, event) {
  // Ensure 'names' is passed correctly and is used as an array
  return names.map(function (name) {
    return `Thank you, ${name}, for the wonderful ${event} gift!`;
  });
}

// Function to count down from the provided number to 0, logging each number
function countDown(number) {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
}

if (typeof module !== module.exports || "undefined") {
  module.exports = {
    countDown,
    writeCards,
  };
}
