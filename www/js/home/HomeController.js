angular.module('app.controllers')

    .controller('HomeCtrl', function ($scope, $state, AuthService) {

        function init() {
            if (AuthService.getAuthToken() == null) {
                $state.go('login');
                return;
            }
        }

        init();

    });
