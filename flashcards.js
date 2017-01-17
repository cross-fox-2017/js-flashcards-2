"use strict"
// write your code here

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var jsonfile = require('jsonfile')
var file = "social.json"
var database = jsonfile.readFileSync(file)

class flashcards {
    constructor() {
        this._totalTebak = 0
        this._salah = 0
        this._nilai = 0
        this._jalan = 0
    }

    layout() {
        rl.question('Welcome to JS Flash Cards. To play, just enter the correct term for each definition. Ready? Go!', (input) => {
            if (input == "") {
                this.run()
            } else {
                this.layout()
            }
        })
    }

    run() {
        if (this._jalan == database.length) {
            console.log(`Kamu Menjawab Pertanyaan Sebanyak: ${this._totalTebak}`);
            console.log(`Kamu Menebak Pertanyaan Salah Sebanyak: ${this._salah}`);
            console.log(`Soal Selesai, Nilaimu: ${this._nilai}`);
            rl.close()
        } else {
            console.log(database[this._jalan].definition)
            rl.question("Guess: ", (answer) => {
                if (answer.toLowerCase() == database[this._jalan].term.toLowerCase()) {
                    this._totalTebak++
                        this._nilai += 10
                    this._jalan++
                        this.run()
                } else if (answer == "skip") {
                    database.push(database[this._jalan])
                    this._jalan++
                        this.run()
                } else {
                    this._totalTebak++
                        this._salah++
                        console.log("Incorrect! Try again");
                    this.run()
                }
            });
        }
    }
    argv(){

    }
}

var game = new flashcards()
var input = process.argv[2]
if (input == file) {
    game.layout()
} else {
    console.log("Database Tidak Ada");
    rl.close();
}
