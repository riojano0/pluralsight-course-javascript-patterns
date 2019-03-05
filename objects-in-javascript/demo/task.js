var task = {
    title:'My Task',
    description: 'My Description'
};

Object.defineProperty(task, 'toString', {
    value: function() {
        return this.title + ' ' + this.description;
    },
    writable: false,
    // Show when the object is rquired
    enumerable: false,
    configurable: false
});

// Like a Inheritance
var urgentTask = Object.create(task);

Object.defineProperty(urgentTask, 'toString', {
    value: function() {
        return this.title + ' is urgent';
    },
    writable: false,
    enumerable: false,
    configurable: false
});

console.log(Object.keys(task));
console.log(task.toString());
console.log(urgentTask.toString());

