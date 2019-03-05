var TaskRepository = (function () {
    var taskRepository;

    function createRepository() {
        var taskRepo = new Object('Task');
        return taskRepo;
    }

    return {
        getInstance: function() {
            if(!taskRepository) {
                taskRepository = createRepository();
            }

            return taskRepository;
        }
    };

}());

var repo1 = TaskRepository.getInstance();
var repo2 = TaskRepository.getInstance();

if(repo1 === repo2) {
    console.log('Same taskRepository');
}