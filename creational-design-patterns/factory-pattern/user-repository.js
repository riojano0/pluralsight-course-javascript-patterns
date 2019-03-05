var repo = function() {

    var db = {};

    var get = function(id) {
        console.log('Getting user ' + id);
        return {
            name: 'new user from db'
        };
    };

    var save = function(user) {
        console.log('saving ' + user.name + ' to database');
    };

    console.log('newing up user repo');
    return {
        get: get,
        save: save
    };

};

module.exports = repo;