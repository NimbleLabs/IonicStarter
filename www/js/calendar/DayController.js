angular.module('app.controllers')

    .controller('DayCtrl', function ($scope, $stateParams, CalendarService) {

        $scope.dayId = $stateParams.id;
        $scope.calendarItem = CalendarService.getCalendarItem( $scope.dayId )


    });
