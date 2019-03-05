(function() {

    var app = angular.module('taskManager', []);

    var taskController = function(Task) {
        var ctrl = this;

        ctrl.task = [
            new Task({name: 'task 1'}),
            new Task({name: 'task 2', completed: true}),
            new Task({name: 'task 3'})
        ];
    };

    app.controller('taskCtrl', taskController);

}());