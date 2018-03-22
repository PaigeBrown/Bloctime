(function() {
    function HomeCtrl($firebaseArray, $interval) {
      this.clock = 2;
      this.onBreak = false;

      var completedSessions = 0;

      this.timer = null;
      this.buttonMsg = "Start Time";
      this.breakMsg = "Start Break";
      this.timerRunning = false;

      this.startTimer = function(){
        this.timerRunning = true;
        this.buttonMsg = "Reset Time";
        this.timer = $interval(function(){
          this.clock -= 1;
          if(this.clock == 0 && completedSessions == 3){
            $interval.cancel(this.timer);
            this.timerRunning = false;
            this.breakMsg = "Start 30 Minute Break"
            this.onBreak = true;
            this.clock = 30;
            completedSessions = 0;
          }
          else if(this.clock == 0) {
            $interval.cancel(this.timer);
            this.timerRunning = false;
            this.onBreak = true;
            this.clock = 5;
            completedSessions ++;
          }
        }.bind(this), 1000);
      }

      this.resetTimer = function(){
        if(angular.isDefined(this.timer)){
          $interval.cancel(this.timer);
          this.clock = 2;
          this.timerRunning = false;
          this.buttonMsg = "Start Time";
        }
      }

      this.breakTimer = function() {
        this.timerRunning= true;
        this.onBreak = false;
        this.buttonMsg = "Reset Time";
        this.breakMsg = "Start Break";
        this.timer = $interval(function (){
          this.clock -=1;
          if(this.clock == 0) {
            $interval.cancel(this.timer);
            this.timerRunning = false;
            this.buttonMsg = "Start Time";
            this.clock = 2;
          }
        }.bind(this), 1000);
      }
    }


    angular
        .module('Bloctime')
        .controller('HomeCtrl', ['$firebaseArray', '$interval', HomeCtrl]);
})();
