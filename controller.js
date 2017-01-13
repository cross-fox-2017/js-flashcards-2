"use strict"
// write your code here
const Model = require('./model.js')
let argv = process.argv
let source = argv[2]
const model = new Model(source)
let data = model.getData();
const View = require('./view.js')



class Controller {
  static run() {
    model.getData(source);
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: ''
    });

    rl.prompt();
    let x = 0
    let wrong = 0
    View.question(data[x].definition)
    rl.on('line', (line) => {
      let lineTrim = line.trim()
      if (line.trim().toLowerCase() == data[x].term.toLowerCase()) {
          View.rightMessage();
          x++;
          wrong = 0;
          if (x < data.length) {
            View.question(data[x].definition)
          } else {
            View.winMessage()
            process.exit(0);
          }
      } else if (line.trim().toLowerCase() == "skip".toLowerCase()) {
        data.push(data[x])
        x++
        View.question(data[x].definition)
      } else {
        wrong ++
        View.wrongMessage(lineTrim, wrong)
        View.question(data[x].definition)
      }
      rl.prompt();
    }).on('close', () => {
      View.abortMessage()
      process.exit(0);
    });
  }
}

module.exports = Controller
