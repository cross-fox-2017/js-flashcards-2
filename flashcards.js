"use strict"
// write your code here
const fs = require('fs');
let obj = require('./social.json');
let data = JSON.parse(fs.readFileSync('social.json', 'utf8'));

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: ''
});

rl.prompt();
var x = 0
var wrong = 0
console.log(data[x].definition)
rl.on('line', (line) => {
  if (line.trim().toLowerCase() == data[x].term.toLowerCase()) {
      console.log('Jawaban Benar!');
      x++
      if (x < data.length) {
        console.log(data[x].definition)
      } else {
        console.log("WAH HEBAT BGT LU")
        process.exit(0);
      }
  } else if (line.trim().toLowerCase() == "skip".toLowerCase()) {
    data.push(data[x])
    x++
    console.log(data[x].definition)
  } else {
    wrong ++
    console.log(`Jawaban '${line.trim()} masih salah, udah salah ${wrong} kali ya'`);
    console.log(data[x].definition)
  }
  rl.prompt();
}).on('close', () => {
  console.log('Ah Culun berenti tengah jalan');
  process.exit(0);
});
