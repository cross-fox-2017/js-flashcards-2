"use strict"
// write your code here

export default class View {
  static correctMessage() {
    console.log('Correct!');
  }

  static incorrectMessage() {
    console.log("Incorrect! Try again.");
  }

  static wrongAnswer(wrongCount) {
    console.log(`You have ${wrongCount} wrong answer.`);
  }

  static question(x) {
    return `\nDefinition:\n${x}\n\nGuess: `
  }

  static win() {
    console.log('Selamat jawaban anda betul semua!');
  }

  static welcome(x) {
    return `Welcome to JS Flash Cards. To play, just enter the correct term for each definition. Ready? Go!\n\nDefinition\n${x}\n\nGuess: `
  }
}
