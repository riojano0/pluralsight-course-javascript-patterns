var repo = function () {
    var called = 0;

    var save = function(task) {
        called++;
        console.log(`saving ${task} Called ${called} times`)
    }

    console.log('new up task repo');
    return {
        save : save
    };

};

// This () to the end, allow to NODE catching on the required;
module.exports = repo();