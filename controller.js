
"use strict"
// write your code here

import Model from "./model"
import View from "./view"
import readline from "readline"

export default class Controller{
  constructor(source){
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.model = new Model(source);
    this.questions = this.model.getData();
    this.countQ = 0;
    this.guessWrongCounter = 0;
  }

  win(){
    View.closingMessage();
    this.rl.close();
  }

  correct(){
    View.correctAnswer();
  }

  incorect(){
    View.wrongAnswer();
  }

  question(x){
    this.rl.setPrompt(x);
    this.rl.prompt();
  }

  run(){
    this.question(View.question(this.questions[0].definition));

    this.rl.on('line', (answer) => {
      if(this.countQ < this.questions.length){
        switch(answer.trim().toUpperCase()){
          case this.questions[this.countQ].term.toUpperCase() :
            View.correctAnswer();
            this.countQ++

            View.messageWrongCounter(this.guessWrongCounter);
            if(this.countQ == this.questions.length){
               this.rl.close()
            }
          break;

          case "SKIP" :
            this.questions.push(this.questions[this.countQ]);
            this.countQ++ ;
            if(this.countQ == this.questions.length){
              this.countQ = 0
            }
          break;

          default:
            this.guessWrongCounter++ ;
            View.wrongAnswer();
            View.messageWrongCounter(this.guessWrongCounter);
            this.rl.prompt();
          break;
        }

        this.question(View.question(this.questions[this.countQ].definition));
        // rl.prompt()
      }
      else {
        this.rl.close()
      }
    }).on('close', () => {
      View.closingMessage()
      process.exit(0);
    });
  }
}
