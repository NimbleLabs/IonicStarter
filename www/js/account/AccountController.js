angular.module('app.controllers')

    .controller('AccountCtrl', function ($scope, AuthService, Log) {
        Log.log("AccountCtrl init");
        $scope.email = AuthService.getEmail();

        $scope.onLogoutClick = function () {
            Log.log("AccountCtrl onLogoutClick");
            AuthService.logout();
            $scope.email = AuthService.getEmail();
        }

        $scope.$on('$ionicView.enter', function (e) {

            // Load any required data here

        });
    });




