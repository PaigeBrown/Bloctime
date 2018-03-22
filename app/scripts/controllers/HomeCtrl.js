(function() {
    function HomeCtrl($firebaseArray, $interval) {
      this.clock = 1500;
      this.timer = null;
      this.buttonMsg = "Start Time";
      this.timerRunning = false;

      this.startTimer = function(){
        this.timerRunning = true;
        this.buttonMsg = "Reset Timer";
        this.timer = $interval(function(){
          this.clock -= 1;
        }.bind(this), 1000);
      }

      this.resetTimer = function(){
        if(angular.isDefined(this.timer)){
          $interval.cancel(this.timer);
          this.clock = 1500;
          this.timerRunning = false;
          this.buttonMsg = "Start Time Again";
        }
      }
    }


    angular
        .module('Bloctime')
        .controller('HomeCtrl', ['$firebaseArray', '$interval', HomeCtrl]);
})();
