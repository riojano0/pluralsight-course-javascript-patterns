var repo = function() {

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

    console.log('newing up task repo');
    return {
        get: get,
        save: save
    };

};

module.exports = repo;