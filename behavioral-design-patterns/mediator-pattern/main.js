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

var mediator = (function(){
    var channels = {};

    var suscribe = function (channel, context, func) {
        if(!mediator.channels[channel]){
            mediator.channels[channel] = [];
        }
        mediator.channels[channel].push({
            context: context,
            func: func
        });
    };


    var publish = function(channel) {
        if(!this.channels[channel]) {
            return false;
        }

        var args = Array.prototype.slice.call(arguments, 1);

        for(var i = 0; i < mediator.channels[channel].length; i++) {
            var sub = mediator.channels[channel][i];
            sub.func.apply(sub.context, args);
        }
    };

    return {
        channels: {},
        suscribe: suscribe,
        publish: publish
    };
}());

var task1 = new Task({
    name: 'create a demo for construstor',
    user: 'Jon'
});

var notification = new notificationService();
var logging = new loggingService();
var audit = new auditingService();

mediator.suscribe('complete', notification, notification.update);
mediator.suscribe('complete', logging, logging.update);
mediator.suscribe('complete', audit, audit.update);

task1.complete = function() {
    mediator.publish('complete', this);
    Task.prototype.complete.call(this);
}

task1.complete();