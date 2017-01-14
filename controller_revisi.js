"use strict"
//Controller
const Model = require("./model.js")
const readline = require('readline')
const View = require("./view.js")


class Controller {
    constructor(input) {
      this.model = new Model(input);
      this.json = this.model.getData();
      this.count = 0;
      this.salah = 0;
      this.rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
    }

    question(x){
      this.rl.setPrompt(x)
      this.rl.prompt()
    }

    skip(){
      this.json.push(this.json[this.count])
      this.count++
      this.question(View.pertanyaan(this.json[this.count].definition))
    }

    correct(){
      this.salah = 0
      View.benar()
      this.count++
      this.question(View.pertanyaan(this.json[this.count].definition))
    }

    incorrect(){
      View.salah()
      this.salah++
      View.salahJawab(this.salah)
      this.rl.prompt()
    }

    win(){
      View.menang()
      this.rl.close()
    }

    play(){
      let rl = this.rl
      View.menu()
      this.question(View.pertanyaan(this.json[this.count].definition))
      rl.on('line',(answer) => {

        if((this.count+1) < (this.json.length)) {

          if (answer.trim().toLowerCase() === "skip") {
            this.skip()
          } else {
            if(answer.trim().toLowerCase() == this.json[this.count].term.toLowerCase()) {
              this.correct()
            } else {
              this.incorrect()
            }
          }
        }
        else {
          this.win()
        }

      });

    }
}

module.exports = Controller
