
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
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })

            // Each tab has its own nav history stack:
            .state('tab.dash', {
                url: '/dash',
                views: {
                    'tab-dash': {
                        templateUrl: 'js/home/index.html',
                        controller: 'HomeCtrl'
                    }
                }
            })

            .state('tab.calendar', {
                url: '/calendar',
                views: {
                    'tab-calendar': {
                        templateUrl: 'js/calendar/index.html',
                        controller: 'CalendarCtrl'
                    }
                }
            })

            .state('tab.day', {
                url: '/calendar/:id',
                views: {
                    'tab-calendar': {
                        templateUrl: 'js/calendar/day.html',
                        controller: 'DayCtrl'
                    }
                }
            })

            .state('tab.account', {
                url: '/account',
                views: {
                    'tab-more': {
                        templateUrl: 'js/account/index.html',
                        controller: 'AccountCtrl'
                    }
                }
            })

            .state('tab.more', {
                url: '/more',
                views: {
                    'tab-more': {
                        templateUrl: 'js/more/index.html',
                        controller: 'MoreCtrl'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/dash');

    });
