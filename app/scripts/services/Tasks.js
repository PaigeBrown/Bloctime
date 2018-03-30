(function() {
  function Tasks($firebaseArray) {
      var ref = firebase.database().ref();

      var TasksHolder = {};

      TasksHolder.tasks = $firebaseArray(ref)

      TasksHolder.addTask = function() {
          TasksHolder.tasks.$add({
              text: TasksHolder.newTaskText,
              CreatedAt: Date.now(),
          });
      }

      return TasksHolder;

  }

  angular
    .module('Bloctime')
    .factory('Tasks', ['$firebaseArray', Tasks]);
})();
