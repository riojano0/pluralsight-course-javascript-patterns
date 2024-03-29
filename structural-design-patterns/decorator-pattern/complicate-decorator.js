var Task = function(name) {
    this.name = name;
    this.completed = false;
};

Task.prototype.complete = function () {
    console.log('Completing task ' + this.name);
    this.completed = true;
};

Task.prototype.save = function () {
    console.log('Saving task:' + this.name);
};

var myTask = new Task('Legacy task');
myTask.complete();
myTask.save();

var UrgentTask = function(name, priority) {
    Task.call(this, name);
    this.priority = priority;
};

//This make a new object from previous prototype preserving her prototype;
UrgentTask.prototype = Object.create(Task.prototype);

UrgentTask.prototype.notify = function () {
    console.log('notifying important people');
};

UrgentTask.prototype.save = function() {
    this.notify();
    console.log('do special stuff before saving');
    Task.prototype.save.call(this);
};

var ut = new UrgentTask('This is urgent', 1);
console.log(ut);
ut.save();