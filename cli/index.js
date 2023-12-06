#!/usr/bin/env node

const program = require('commander');

program
  .version('0.0.1')
  .description('An example CLI tool in Node.js')
  .option('-n, --name <type>', 'Your name')
  .option('-a, --age <type>', 'Your age')
  .parse(process.argv);

if (program.name) console.log(`Hello, ${program.name}!`);
if (program.age) console.log(`You are ${program.age} years old.`);