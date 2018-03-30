(function() {
    function HomeCtrl($scope, $firebaseArray, Timer) {

      var ref = firebase.database().ref();
      $scope.tasks = $firebaseArray(ref);

         $scope.addTask = function() {
              $scope.tasks.$add({
                  text: $scope.newText,
                  CreatedAt: Date.now(),
              });

              if($scope.tasks.$add) {
                 console.log("Message Saved");
             }
          };

         this.timer = Timer;

         $scope.timer = Timer;

         var mySound = new buzz.sound( "/assets/sounds/ding.mp3", {
            preload: true
         });

         $scope.$watch('timer.clock', function(val1, val2) {
           console.log(val1);
             if(val1 == 0) {
                 mySound.play();
             }
         });

        }

     angular
         .module('Bloctime')
         .controller('HomeCtrl', ['$scope', '$firebaseArray', 'Timer', HomeCtrl]);
 })();
