const chalk = require("chalk");

const log = console.log;

// console.log(chalk.yellow("Hello World"));

log(chalk.blue('Hello') + ' World' + chalk.red('!'));

log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);