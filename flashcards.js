"use strict"
// write your code here
import Controller from "./controller.js"
let argv = process.argv


let controller = new Controller(argv[2])

controller.run();
