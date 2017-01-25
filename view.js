"use strict"
// write your code here
export default class View {
  static welcomingMessage(){
    console.log('\nWelcome to JS Flash Card. To play, just enter the correct term for each definition. Ready ? GO ! \n');
  }

  static correctAnswer(){
    console.log('your answer is correct!');
  }

  static wrongAnswer(){
    console.log(`wrong answer!!`);
  }

  static closingMessage(){
    console.log('\nCongrats! you answered all correct. Thanks for playing this game. Hope you get something from this game !!\n');
  }

  static insertYourAnswer(){
    console.log('\nYour answer: ')
  }

  static messageWrongCounter(guessWrongCounter){
    console.log(`you have made ${guessWrongCounter} mistakes`);
  }

  static question(x) {
    return `\nDefinition:\n${x}\nYour answer: `
  }


}
