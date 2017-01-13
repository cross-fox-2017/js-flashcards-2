"use strict"

const Controller = require("./controller.js")

let input = process.argv[2]

const controller = new Controller(input)

controller.pertanyaan()
