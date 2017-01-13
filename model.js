"use strict"
const fs = require("fs");

export class Model{
  static data(){
    let parsed = JSON.parse(fs.readFileSync('data.json','utf-8'))
    return parsed
  }
}
