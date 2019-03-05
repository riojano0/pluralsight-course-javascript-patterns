var repositoryFactory = function () {

    this.getRepository = function(repositoryType) {
        if(repositoryType === 'task') {
            return require('./task-repository')();
        }
        if(repositoryType === 'user') {
            return require('./user-repository')();
        }
        if(repositoryType === 'project') {
            return require('./project-repository')();
        }
    };

};

module.exports = new repositoryFactory();