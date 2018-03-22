(function() {
     function IntervalHandler($interval) {

         var promise;

         this.start = function() {
             this.stop();

             promise = $interval(function () {
                this.clock -= 1;
             }.bind(this), 1000);
         }

         this.stop = function() {
             $interval.cancel(promise);
         }


         this.start();

         this.$on('destroy', function() {
             this.stop();
         })

     }

     angular
         .module('Bloctime')
         .factory('IntervalHandler', ['$firebaseArray', '$interval', IntervalHandler]);
 })();
