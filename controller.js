"use strict"
// write your code here
const Model = require('./model.js')
const View  = require('./view.js')

class Controller {
  static play(deck){
    const readline = require('readline')
    const fs = require('fs')
    var colors = require('colors');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const model = new Model(deck)
    let dataDeck = model.getData()

    //console.log(dataDeck);

    //rubah status ke FALSE tiap kali game mulai
    for (var x = 0; x < dataDeck.length; x++) {
      dataDeck[x]['status'] = false
    }

    let i = 0
    console.log('Welcome to FlashCards Game\n'.trap.america);

    View.showSoal(`${dataDeck[i]['definition']}\n\nJawaban : \n`)
    let salahCount = 0
    rl.on('line', (input) => {
    if (dataDeck[i]['status'] == false && i <= 6) {

      switch(input.trim().toLowerCase()) {
        case dataDeck[i]['term'].toLowerCase():
            View.pesanBenar();
            dataDeck[i]['status'] = true
            i++
            salahCount = 0

            break;

        case 'skip':
          let splice = dataDeck.splice(i,1)
          dataDeck.push(splice[0])
          //View.showSoal(0)
          break;

        default:
          salahCount++
          View.pesanSalah(salahCount);
          break;
      }
      // console.log(i);
      if (i !== 6) {
        View.showSoal(`${dataDeck[i]['definition']}\n\nJawaban : \n`)
      } else {
        rl.close()
      }

    }
    else {
      rl.close()
    }

    }).on('close', () => {
      View.pesanMenang()
      process.exit(0);
    });
  }
}


module.exports = Controller
