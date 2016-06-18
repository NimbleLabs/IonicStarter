angular.module('app.controllers')

    .controller('CalendarCtrl', function ($scope, CalendarService) {

        $scope.calendar = CalendarService.getCalendar();
    });
