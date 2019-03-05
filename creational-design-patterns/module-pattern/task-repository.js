var repo = function() {

    //This work like a private
    var db = {};

    var get = function(id) {
        console.log('Getting task ' + id);
        return {
            name: 'new Task from db'
        };
    };

    var save = function(task) {
        console.log('saving ' + task.name + ' to database');
    };

    return {
        get: get,
        save: save
    };

};

module.exports = repo();