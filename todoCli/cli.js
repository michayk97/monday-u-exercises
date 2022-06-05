import cliTodoFunctions from './cliTodoFunctions.js';
import { Command } from 'commander';
const program = new Command();
const todo = new cliTodoFunctions();

program
	.name('Todo list')
	.description('The best todo list in town')
	.version('1.0.0');

program
	.command('add')
	.summary('Add Task to your todo')
	.description(
		`Add a task to your todo list, it can be a string, a single number representing a Pokemon id or number of numbers spererated by commas.
			Examples:
				1. $ node cli.js add "Go for a walk" 
				2. $ node cli.js add 77 
				3. $ node cli.js add 3,4,5,6,7
			Result:
				1. Go for a walk task would be added to your todo list
				2. 3. All of the mentiond Id would be added to the list as a task (if ID is correct)`
	)
	.argument('<string /number>', 'Add Task')
	.option('-c, --color <string>', 'Result color', 'white')
	.action((input, options) => {
		todo.handleAddAction(input);
	});

program
	.command('get')
	.summary('Get your todo list')
	.description('Get an orderd list of your current todo tasks')
	.option('-c, --color <string>', 'Result color', 'white')
	.action((options) => {
		todo.readFromList();
	});

program
	.command('delete')
	.summary('Delete task')
	.description(
		`Delete a specific task from your todo list.
			Write:
				$ node cli.js delete
			Result:
				Select the task you want to delete`
	)
	.option('-c, --color <string>', 'Result color', 'white')
	.action((input, options) => {
		todo.SelectTaskToBeDeleted();
	});
program.addHelpText(
	'after',
	`Examples:
		1. Add Task : $ node cli.js add "<string>" / <number> / <numbers> speretad by commas"
		2. Get Task list : $ node cli.js get
		3. Delete specific task : $ node cli.js delete`
);

program.parse();
