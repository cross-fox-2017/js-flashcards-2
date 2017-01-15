"use strict"
// write your code here
const fs     = require('fs')
let argv     = process.argv

class Model {
  constructor(deck) {
    this.deck = deck || 'music.json'
  }

  getData(){
    return JSON.parse( fs.readFileSync( this.deck, 'UTF-8'))
  }
}

module.exports = Model
