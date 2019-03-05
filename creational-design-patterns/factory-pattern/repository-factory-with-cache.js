var repositoryFactory = function () {

    this.getRepository = function(repositoryType) {
        if(repositoryType === 'task') {
            if(this.taskRepo) {
                return this.taskRepo;
            } else {
                this.taskRepo = require('./task-repository')();
                // -- Config
                return this.taskRepo;
            }
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