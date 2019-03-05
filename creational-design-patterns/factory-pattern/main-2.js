var Task = require('./task');
var repositoryFactory = require('./repository-factory-2');

var task1 = new Task(repositoryFactory.task.get(1));
var task2 = new Task(repositoryFactory.task.get(2));

var user = repositoryFactory.user.get(1);
var project = repositoryFactory.project.get(1);

task1.user = user;
task1.project = project;

task1.save();
