(function() {
    function config($locationProvider, $stateProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
             });

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            });
    }

    angular
        .module('Bloctime', ['ui.router', 'firebase'])
        .constant("TIMES", {
         "WORK_SESSION": 1500,
         "SHORT_BREAK": 300,
         "LONG_BREAK": 1800
     })
        .config(config);
})();
