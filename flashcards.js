"use strict"
// write your code here
let argv = process.argv
let source = argv[2]

const Controller = require('./controller.js')

Controller.run(source)
