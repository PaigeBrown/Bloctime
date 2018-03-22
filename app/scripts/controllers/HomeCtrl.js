(function() {
    function HomeCtrl($firebaseArray, $interval) {
      this.clock = 3;
      this.onBreak = false;
      this.timer = null;
      this.buttonMsg = "Start Time";
      this.breakMsg = "Start Break";
      this.timerRunning = false;

      this.startTimer = function(){
        this.timerRunning = true;
        this.buttonMsg = "Reset Time";
        this.timer = $interval(function(){
          this.clock -= 1;
          if(this.clock == 0){
            $interval.cancel(this.timer);
            this.timerRunning = false;
            this.onBreak = true;
            this.clock = 300;
          }
        }.bind(this), 1000);
      }

      this.resetTimer = function(){
        if(angular.isDefined(this.timer)){
          $interval.cancel(this.timer);
          this.clock = 1500;
          this.timerRunning = false;
          this.buttonMsg = "Start Time";
        }
      }

      this.breakTimer = function() {
        this.timerRunning= true;
        this.onBreak = false;
        this.buttonMsg = "Reset Time";
        this.timer = $interval(function (){
          this.clock -=1;
          if(this.clock == 0) {
            $interval.cancel(this.timer);
            this.timerRunning = false;
            this.buttonMsg = "Start Time";
            this.clock = 1500;
          }
        }.bind(this), 1000);
      }
    }


    angular
        .module('Bloctime')
        .controller('HomeCtrl', ['$firebaseArray', '$interval', HomeCtrl]);
})();
