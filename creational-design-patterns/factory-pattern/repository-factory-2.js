var repositoryFactory = function() {
    var repos = this;
    var repositoryList = [
        {name: 'task', source: './task-repository'},
        {name: 'user', source: './user-repository'},
        {name: 'project', source: './project-repository'}
    ];

    repositoryList.forEach(function(repo) {
        repos[repo.name] = require(repo.source)();
    });
};

module.exports = new repositoryFactory();