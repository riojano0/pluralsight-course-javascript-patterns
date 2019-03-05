// ECMAScript 2015
// Only allow create classes on strict mode
// You don't need to have the propotype because class take care of that.
'use strict';

class Task {

    constructor(name){
        this.name = name;
        this.completed = false;
    };

    complete() {
        console.log('Completing task ' + this.name);
        this.completed = true;
    };

    save() {
        console.log('Saving task:' + this.name);
    };

}


var task1 = new Task('Create a demo for constructors');
var task2 = new Task('Create a demo for modules');
var task3 = new Task('Create a demo for singletons');
var task4 = new Task('Create a demo for protoypes');

task1.complete();
task2.save();
task3.save();
task4.save();