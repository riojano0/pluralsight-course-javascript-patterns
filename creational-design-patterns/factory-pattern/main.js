var Task = require('./task');
var repositoryFactory = require('./repository-factory-with-cache');

var task1 = new Task(repositoryFactory.getRepository('task').get(1));
var task2 = new Task(repositoryFactory.getRepository('task').get(2));

var user = repositoryFactory.getRepository('user').get(1)
var project = repositoryFactory.getRepository('project').get(1)

task1.user = user;
task1.project = project;

task1.save();
