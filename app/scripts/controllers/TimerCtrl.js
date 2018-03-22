var Bloctime = angular.module("Bloctime")

.controller("TimerCtrl",['$scope','$interval',
            function($scope, $interval){
                $scope.clock = "1500";

                $interval(function(){
                    parseInt($scope.clock) =-60;
                }, 1000)
            }])
