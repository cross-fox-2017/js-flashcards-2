"use strict"
// write your code here
let fs                        = require('fs');
let countQ                    = 0;
var guessWrongCounter         = 0;
var question                  = JSON.parse(fs.readFileSync('social.json','utf-8'));
const readline                = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


console.log('\nWelcome to JS Flash Card. To play, just enter the correct term for each definition. Ready ? GO ! \n')

rl.setPrompt(`${question[countQ].definition}?\ninsert your answer :`)
rl.prompt()

rl.on('line', (answer) => {
  if(countQ < question.length){

    switch(answer.trim().toUpperCase()) {
      case question[countQ].term.toUpperCase():
        console.log('your answer is correct!');
        countQ++
        console.log(`you have made ${guessWrongCounter} mistakes in total`);

        if(countQ == question.length){
           rl.close()
        }
        break;

      case "SKIP":
        question.push(question[countQ])
        countQ++
        if(countQ == question.length){
          countQ = 0
        }
        break;
      default:
        guessWrongCounter++
        console.log(`wrong answer!!`);
        console.log(`you have made ${guessWrongCounter} mistakes`);
        break;
    }

      rl.setPrompt(`${question[countQ].definition}?\nJawaban :`)
      rl.prompt()

  }else{
    rl.close()
  }

}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});
