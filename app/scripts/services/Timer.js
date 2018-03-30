(function() {
     function Timer($interval, TIMES) {

         var Timer = {};

         Timer.timerRunning = false;
         Timer.breakMsg = "Start Break";
         Timer.onBreak = false;
         Timer.buttonMsg = "Start Timer";
         Timer.completedSessions = 0;

         Timer.timer = null;
         Timer.clock = 2;

         Timer.start = function() {
             Timer.timerRunning = true;
             Timer.buttonMsg = "Reset Timer";
             Timer.onBreak = false;

             Timer.timer = $interval(function (){
                 Timer.clock--;

                 if(Timer.clock == -1 && Timer.completedSessions == 3) {
                     $interval.cancel(Timer.timer);
                        Timer.timerRunning = false;
                        Timer.breakMsg = "Take a 30 minute break!"
                        Timer.onBreak = true;
                        Timer.clock = 30;
                        Timer.completedSessions = 0;
                 }

                 else if(Timer.clock == -1) {
                     $interval.cancel(Timer.timer);
                         Timer.timerRunning = false;
                         Timer.breakMsg = "Start Break";
                         Timer.onBreak = true;
                         Timer.clock = 5;
                         Timer.completedSessions ++;
                 }


             }.bind(this), 1000);
           }

         Timer.reset = function() {
             if (angular.isDefined(Timer.timer)) {
                    $interval.cancel(Timer.timer);
                    Timer.clock = 2;
                    Timer.timerRunning = false;
                    Timer.buttonMsg = 'Start Timer'
             }
         }

         Timer.break = function() {
             Timer.timerRunning = true;
             Timer.onBreak = false;
             Timer.breakMsg = "Start Break"
             Timer.buttonMsg = "Reset Timer";
             Timer.timer = $interval(function () {
                 Timer.clock -= 1;
                 if(Timer.clock == -1) {
                     $interval.cancel(Timer.timer);
                     Timer.timerRunning = false;
                     Timer.buttonMsg = "Start Timer"
                     Timer.clock = 2;
                 }
             }.bind(this), 1000);
         }


         return Timer;


     }

     angular
         .module('Bloctime')
         .factory('Timer', ['$interval', 'TIMES', Timer]);
 })();
