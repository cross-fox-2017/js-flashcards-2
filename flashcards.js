// "use strict"
//
// class Model {
//   constructor(filename) {
//     const fs = require('fs')
//     var dataFile = JSON.parse(fs.readFileSync(filename,'UTF-8'))
//   }
//   getData(id) {
//     return ''
//   }
// }
//
// //controller
// let model = new Model('social.json')
// model.getData(i)

// write your code here
// const readline = require('readline');
// var colors = require('colors');
// const fs = require('fs')
// var dataFile = JSON.parse(fs.readFileSync('social.json','UTF-8'))
//
// for (var x = 0; x < dataFile.length; x++) {
//   dataFile[x]['status'] = false
// }
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
//
// function showSoal(id) {
//   rl.setPrompt(`${dataFile[id]['definition']}\n\nJawaban : \n`)
//   rl.prompt();
// }
//
// let i = 0
// console.log('Welcome to FlashCards Game\n'.trap.america);
//
// showSoal(i)
// let salahCount = 0
// rl.on('line', (input) => {
// if (dataFile[i]['status'] == false && i <= 6) {
//   switch(input.trim().toLowerCase()) {
//     case dataFile[i]['term'].toLowerCase():
//         console.log('\nJawaban Benar\n'.green);
//         dataFile[i]['status'] = true
//
//         i++
//         salahCount = 0
//
//         break;
//
//     case 'skip':
//       let splice = dataFile.splice(i,1)
//       dataFile.push(splice[0])
//       rl.setPrompt(`\n${dataFile[0]['definition']}\nJawaban : \n`)
//       break;
//
//     default:
//       console.log(`jawaban salah\n`.red);
//       salahCount++
//       console.log(`jawaban salah : ${salahCount}\n`);
//       break;
//   }
//   // console.log(i);
//   if (i !== 6) {
//     showSoal(i)
//   } else {
//     rl.close()
//   }
//
//
// }
// else {
//   rl.close()
// }
//
// }).on('close', () => {
//   console.log('\nSelamat anda menang!'.rainbow);
//   process.exit(0);
// });

"use strict"
// write your code here
let argv = process.argv
let deck = argv[2]

const Controller = require('./controller.js')

Controller.play(deck)
