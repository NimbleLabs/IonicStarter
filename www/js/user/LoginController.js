angular.module('app.controllers')

  .controller('LoginCtrl', function($scope, $state, AuthService, AppConstants, Log) {
    $scope.email = '';
    $scope.password = '';
    $scope.message = '';
    $scope.passwordLink = AppConstants.BASE_URL + '/users/password/new'

    $scope.isWebApp = Log.isWebApp();
    $scope.isMobileApp = !$scope.isWebApp;

    $scope.onSubmitClick = function() {
      $scope.message = '';
      var promise = AuthService.login( $scope.email, $scope.password )

      promise.then(function(user) {
        // TODO: should we load a user data here?
        $state.go('app.home');
      }, function(response) {
        Log.log( '***** login failed *****' )
        $scope.message = response.error
      });
    }
  });




