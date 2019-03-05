(function(){

    var app = angular.module('taskManager');

    app.factory('Task', function(){
        var Task = function(data) {
            this.name = data.name;
            this.completed = data.completed;
        };
        
        Task.prototype.complete = function () {
            console.log('Completing task ' + this.name);
            this.completed = true;
        };
        
        Task.prototype.save = function () {
            console.log('Saving task:' + this.name);
        };

        return Task;
    });

}());