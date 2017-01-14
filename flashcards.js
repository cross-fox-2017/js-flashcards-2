"use strict"

const Controller = require("./controller_revisi.js")

let input = process.argv[2]

const controller = new Controller(input)

controller.play()
