"use strict"
// write your code here
let argv = process.argv

const fs = require('fs');

class Model {
  constructor(source) {
    this.source = source || 'social.json'
  }

  getData() {
    return JSON.parse(fs.readFileSync(this.source, 'utf8'))
  }
}
module.exports = Model
