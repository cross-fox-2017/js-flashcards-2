"use strict"
// write your code here
import {Model} from './model.js'
import {View} from './view.js'
const readline = require('readline');

export class Controller{
  constructor(file){
    this.counter = 0;
    this.argv = file
    this.newData = Model.data(file);
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }
  fileCheck(){
    if(this.argv == null){
      View.nullFile()
    } else {
      View.fileNotNull(this.argv)
    }
  }
  sorting(){
    this.newData.sort(function(a,b){
      return a.mistakes < b.mistakes
    })
  }
  exit(){
    if(this.newData[0].mistakes===0){
      View.perfect()
    } else{
      View.notPerfect(this.newData[0].definition,this.newData[0].mistakes)
    }
  }
  prompting(){
    this.rl.setPrompt(View.setquestion(this.newData[this.counter].definition))
    this.rl.prompt();
  }
  skipping(){
    this.newData.push(this.newData[this.counter]);
    this.newData.shift();
  }
  permainan(){
    View.welcome()
    this.fileCheck()
    this.prompting()
    this.rl.on('line', (jawaban) => {
      if(this.counter=== this.newData.length){
        this.rl.close()
      }
      if(jawaban === 'skip'){
        this.skipping()
      }else {
        if(jawaban.toLowerCase() == this.newData[this.counter].term.toLowerCase()){
          View.rightAnswer()
          this.counter++
        }else{
          this.newData[this.counter].mistakes++
          View.wrongAnswer(this.newData[this.counter].mistakes)
        }
      }
      this.prompting()
    }).on('close', () => {
      this.sorting();
      this.exit();
      process.exit(0);
    });
  }
}
