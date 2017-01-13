"use strict"
// write your code here
import {Model} from './model.js' 

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export class View{

  static permainan(){
    console.log(`Selamat datang Dipermaian FlashCard 1\n\n`);
    let counter = 0
    rl.setPrompt(`${Model.data()[counter].definition}?\n`)
    rl.prompt();
    rl.on('line', (jawaban) => {
      if(jawaban.toLowerCase() == Model.data()[counter].term.toLowerCase()){
        console.log(`Jawaban Anda BETUL!!! \n`);
        counter++
      }else{
        console.log(`Yah, masih salah, coba lagi bro \n`);
      }
      if(counter=== Model.data().length){
        rl.close()
      }
      rl.setPrompt(`${Model.data()[counter].definition}? \n`)
      rl.prompt();
    }).on('close', () => {
      console.log('Hebat coy!');
      process.exit(0);
    });
  }
}
