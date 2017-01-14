"use strict"
//View

// const Controller = require("./controller.js")
//
// const controller = new Controller()
//
// controller.pertanyaan()

class View {
  static benar() {
    console.log('Benar bro!')
  }

  static salah() {
    console.log('Salah bro! Coba lagi dong!')
  }

  static salahJawab(salah) {
    console.log(`Jawaban salah yang ke- ${salah}`)
  }

  static pertanyaan(x) {
    return `\nDefinition:\n${x}\nGuess: `
  }

  static menang() {
    console.log("Selamat benar semua bro!")
  }

  static menu() {
    console.log("Welcome to JS Flash Cards. To play, just enter the correct term for each definition. Ready ? Go !")
  }
}

module.exports = View
