"use strict"
//Controller
const Model = require("./model.js")
const readline = require('readline')

class Controller {
    constructor(input) {
      this.input = input
      this.rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
    }

    pertanyaan(){
      let rl = this.rl
      const model = new Model(this.input)
      let json = model.getData();
      let count = 0;
      let salah = 0;
      console.log("Welcome to JS Flash Cards. To play, just enter the correct term for each definition. Ready ? Go !\n");
      rl.setPrompt("DEFINITION  : \n"+json[0].definition+" \nGUESS : ")
      rl.prompt()
      rl.on('line',(answer) => {

        if (answer === "skip") {
          json.push(json[count])
          count++
          rl.setPrompt("\nDEFINITION  : \n"+json[count].definition+" \nGUESS : ")
          rl.prompt()
        } else {
          if((count+1) < json.length) {
            if(answer.toLowerCase() == json[count].term.toLowerCase()) {
              console.log("ANDA BENAR !\n");
              count++
              rl.setPrompt("DEFINITION  : \n"+json[count].definition+" \nGUESS : ")
              rl.prompt()
            } else {
              salah++
              console.log("ANDA SALAH ! Salah ke-"+salah+"\n");
              rl.setPrompt("DEFINITION  : \n"+json[count].definition+" \nGUESS : ")
              rl.prompt()
            }
           } else {
            rl.close()
            console.log("ANDA BENAR SEMUA !");
          }
        }
      });
    }
}

module.exports = Controller
