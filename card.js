#!/usr/bin/env node

// Module declaration:
import chalk from 'chalk';
import boxen from 'boxen';

// Define options for ‘boxen’:
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Inclusion of Text and more ‘chalk’ definitions:
const data = {
  name: chalk.white('Gabriel Agundiz/'),
  handle: chalk.cyan('GabrielAgundiz'),
  work: chalk.white('FrontEnd Developer (Web & Mobile)'),
  github: chalk.cyan('https://github.com/GabrielAgundiz'),
  linkedin: chalk.cyan('https://www.linkedin.com/in/gabriel-agundiz/'),
  web: chalk.cyan('https://gabrielagundiz.com/'),
  npx: chalk.white('npx gabrielagundiz'),
  labelWork: chalk.white.bold('      Work:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelMedium: chalk.white.bold('    Medium:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:')
}

// Here will be the output of my Personal Card in NPX:
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Here we must put all our output into a single variable so that we can use
// 'boxen' effectively:
const output = heading + newline + newline + working + newline + newline + githubing + newline + linkedining + newline + newline + webing + newline + newline + carding

console.log(chalk.green(boxen(output, options)))
