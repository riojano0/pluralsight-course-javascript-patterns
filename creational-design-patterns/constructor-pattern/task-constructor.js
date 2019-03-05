var Task = function(name) {
    this.name = name;
    this.complete = false;

    this.completed = function() {
        console.log('Completing task ' + this.name);
        this.completed = true;
    };

    this.save = function() {
        console.log('Saving task:' + this.name);
    };
};


var task1 = new Task('Create a demo for constructors');
var task2 = new Task('Create a demo for modules');
var task3 = new Task('Create a demo for singletons');
var task4 = new Task('Create a demo for protoypes');

task1.completed();
task2.save();
task3.save();
task4.save();