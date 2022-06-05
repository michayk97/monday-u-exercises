import cliTodoFunctions from './cliTodoFunctions.js';
import { Command, Help } from 'commander';
import inquirer from 'inquirer';
import chalk from 'chalk';
import readlineSync from 'readline-sync';
import asciify from 'asciify-image';
import imageToAscii from 'image-to-ascii';

import meow from 'meow';
const todo = new cliTodoFunctions();

const cli = meow(
	`
	${chalk.yellowBright(`Functions`)}:
	1. Add new task -  Can be a string, a single number or number of numbers spererated by commas.
	2. See all of the tasks  - Get an orderd list of your current todo tasks
	3. Delete task - Delete a specific task from your todo list
	4. Help - Gets you to this tutorial
	
	${chalk.yellowBright(`Usage`)}:
		Run -> $ node .

		-> a list of all of the availavle options will appear, select your desired one. (Use arrow keys)
		-> once you've selected your desired option please enter a task you want to add or the number of task you want to delete.

	${chalk.yellowBright(`Examples`)}:
		$ node .
		? Please select your desired action (Use arrow keys)
			1. Add new task 
			2. See all of the tasks 
			3. Delete task 
			4. Help 
		
			? Please select your desired action 1. Add new task
			What task do you want to add?  3,4,5,6

			New todo added successfully
			Catch charmander already exist
			Catch charmeleon already exist
			New todo added successfully		
`,
	{
		importMeta: import.meta,
		flags: {
			rainbow: {
				type: 'boolean',
				alias: 'r',
			},
		},
	}
);

async function run() {
	let options = [
		'1. Add new task',
		'2. See all of the tasks',
		'3. Delete task',
		'4. Help',
	];
	const choice = await inquirer.prompt({
		name: 'action',
		type: 'list',
		message: 'Please select your desired action',
		choices: options,
	});

	switch (options.indexOf(choice.action) + 1) {
		case 1:
			const input = readlineSync.question(
				'What task do you want to add? '
			);
			todo.handleAddAction(input);
			break;
		case 2:
			todo.readFromList();
			break;
		case 3:
			todo.SelectTaskToBeDeleted();
			break;

		case 4:
			console.log(cli.help);
			break;
	}
}
// run();

// asciify(
// 	'https://memegenerator.net/img/instances/43020609.jpg',
// 	options,
// 	function (err, asciified) {
// 		if (err) throw err;

// 		// Print to console
// 		console.log(asciified);
// 	}
// );

imageToAscii(
	'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png',
	{
		bg: false,
		fg: true,
		white_bg: false,
	},
	(err, converted) => {
		console.log(err || converted);
	}
);
