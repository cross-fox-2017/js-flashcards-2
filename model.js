"use strict"
const fs = require("fs");

export class Model{
  static data(){
    let parsed = JSON.parse(fs.readFileSync('data.json','utf-8'))
    for (let i = 0; i < parsed.length; i++){
      parsed[i].mistakes = 0
    }
    return parsed
  }
}
