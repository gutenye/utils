#!/usr/bin/env node-stage-0

var utils = require("./utils")
var pd = console.log.bind(console)

utils.setInterval(() => {
  pd(new Date())
}, 1*1000)

//pd(utils.pascalCase("ab_cd ef")) // AbCdEf
