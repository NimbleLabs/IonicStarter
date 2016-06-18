
angular.module('app.controllers', []);

angular.module('app.services', []);

angular.module('starter', ['ionic', 'app.controllers', 'app.services'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                StatusBar.overlaysWebView(true);
                StatusBar.style(1);
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('login', {
                url: '/login',
                templateUrl: 'js/user/login.html',
                controller: 'LoginCtrl'
            })

            // setup an abstract state for the tabs directive
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'js/tabs.html'
            })

            // Each tab has its own nav history stack:
            .state('app.home', {
                url: '/home',
                views: {
                    'app-home': {
                        templateUrl: 'js/home/index.html',
                        controller: 'HomeCtrl'
                    }
                }
            })

            .state('app.calendar', {
                url: '/calendar',
                views: {
                    'app-calendar': {
                        templateUrl: 'js/calendar/index.html',
                        controller: 'CalendarCtrl'
                    }
                }
            })

            .state('app.day', {
                url: '/calendar/:id',
                views: {
                    'app-calendar': {
                        templateUrl: 'js/calendar/day.html',
                        controller: 'DayCtrl'
                    }
                }
            })

            .state('app.account', {
                url: '/account',
                views: {
                    'app-account': {
                        templateUrl: 'js/account/index.html',
                        controller: 'AccountCtrl'
                    }
                }
            })

            .state('app.more', {
                url: '/more',
                views: {
                    'app-more': {
                        templateUrl: 'js/more/index.html',
                        controller: 'MoreCtrl'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/home');

    });
