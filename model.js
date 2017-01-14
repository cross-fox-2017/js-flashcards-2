"use strict"

const fs = require("fs")

class Model {
  constructor (source) {
    this.source = source
  }

  getData(){
    return JSON.parse(fs.readFileSync(this.source, "utf-8"))
  }
}

module.exports = Model
