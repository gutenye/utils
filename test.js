#!/usr/bin/env node-stage-0

var utils = require("./utils")
var pd = console.log.bind(console)

var index = 0
var a = new utils.Timer(() => {
  index = index + 1
  console.log(index)
  if (index === 5) {
    a.stop()
  }
}, 1000)
a.start()
a.start()
a.start()
a.start()

setTimeout(() => a.start(), 10000)


//pd(utils.pascalCase("ab_cd ef")) // AbCdEf
