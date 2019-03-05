var repo = function() {

    var db = {};

    var get = function(id) {
        console.log('Getting project ' + id);
        return {
            name: 'new Project from db'
        };
    };

    var save = function(project) {
        console.log('saving ' + project.name + ' to database');
    };

    console.log('newing up project repo');
    return {
        get: get,
        save: save
    };

};

module.exports = repo;