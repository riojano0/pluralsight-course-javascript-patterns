var Task = require('./taks');

var notificationService = function() {
    var message = 'Notifying ';
    this.update = function(task) {
        console.log(`${message} ${task.user} for task ${task.name}`);
    };
};
var loggingService = function() {
    var message = 'Logging ';
    this.update = function(task) {
        console.log(`${message} ${task.user} for task ${task.name}`);
    };
};
var auditingService = function() {
    var message = 'Auditing ';
    this.update = function(task) {
        console.log(`${message} ${task.user} for task ${task.name}`);
    };
};


function ObserverList(){
    this.ObserverList = [];
}

ObserverList.prototype.add = function (obj) {
    return this.ObserverList.push(obj);
};

ObserverList.prototype.get = function (index) {
    if(index > -1 && index < this.ObserverList.length) {
        return this.ObserverList[index];
    }
};

ObserverList.prototype.count = function (index) {
    return this.ObserverList.length;
};

ObserverList.prototype.removeAt = function (index) {
    this.ObserverList.splice(index, 1);
};

ObserverList.prototype.indexOf = function (obj, startIndex) {
    var i = startIndex;

    while(i < this.ObserverList.length) {
        if(this.ObserverList[i] === obj) {
            return i;
        }
        i++;
    }

    return -1;
};

var ObservableTask = function(data) {
    Task.call(this, data);
    this.observers = new ObserverList();
};

ObservableTask.prototype.addObserver = function(observer) {
    this.observers.add(observer);
};

ObservableTask.prototype.removeObserver = function(observer) {
    this.observers.removeAt(this.observers.indexOf(observer, 0));
};

//In this case context will be Task
ObservableTask.prototype.notifiy = function(context) {
    var observerCount = this.observers.count();
    for(var i = 0 ; i < observerCount; i++) {
        this.observers.get(i)(context);
    }
};

ObservableTask.prototype.save = function() {
    this.notifiy(this);
    Task.prototype.save.call(this);
};

var task1 = new ObservableTask({
    name: 'create a demo for construstor',
    user: 'Jon'
});

var notification = new notificationService();
var logging = new loggingService();
var audit = new auditingService();

task1.addObserver(notification.update);
task1.addObserver(logging.update);
task1.addObserver(audit.update);

task1.save();

task1.removeObserver(audit.update);

task1.save();