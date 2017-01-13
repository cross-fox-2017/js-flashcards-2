"use strict"
// write your code here
let fs                        = require('fs');
let countQ                    = 0;
var falseCounter              = 0;
var question                  = Questions()
const readline                = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function Questions(){
  var getData = JSON.parse(fs.readFileSync('social.json','utf-8'));
  for(var j = 0 ; j < getData.length; j++){
    getData[j].status = false
  }
  return getData
}

console.log('Welcome to JS Flash Card. To play, just enter the correct term for each definition. Ready ? GO ! \n')

rl.setPrompt(`${question[countQ].definition}?\nJawaban :`)
rl.prompt()

rl.on('line', (answer) => {
  if(question[countQ].status == false && (countQ + 1) < question.length){
    //console.log(countQ, question.length, question[countQ].status)

    switch(answer.trim().toUpperCase()) {
      case question[countQ].term.toUpperCase():
        console.log('jawaban benar');
        question[countQ].status = true
        countQ++
        break;
      case "SKIP":
        countQ++
        if(countQ == question.length){
          countQ = 0
        }
        break;
      default:
        console.log(`jawaban salah`);
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
