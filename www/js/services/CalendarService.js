angular.module('app.services')

    .factory('CalendarService', function () {

        var calendar = [{
            id: 0,
            day: 'Sunday',
            events: [ {
                time: '8:00 a.m.',
                name: 'Worship with Rev. John Wood preaching - Worship Center'
            }, {
                time: '9:30 a.m.',
                name: 'Sunday School for all ages'
            }, {
                time: '10:55 a.m.',
                name: 'Worship with Rev. John Wood preaching - Worship Center'
            }, {
                time: '1:30 p.m.',
                name: 'Japanese Worship Service - G101'
            }, {
                time: '6:00 p.m.',
                name: 'Worship with Rev. John Wood preaching - Worship Center'
            }, {
                time: '7:15 p.m.',
                name: 'Global Glimpse - FH-A, FH-E, FH-F, G101, G103, Chapel'
            } ]
        }, {
            id: 1,
            day: 'Monday',
            events: [ {
                time: '6:30 a.m.',
                name: 'MOC Study - FH-E&F'
            }, {
                time: '5:15 p.m.',
                name: 'Dinner and Fellowship - FH (*Nursery 5:45–8:00 p.m.) '
            } ]
        }, {
            id: 2,
            day: 'Tuesday',
            events: [ {
                time: '6:30 a.m.',
                name: 'MOC Study - FH-E&F'
            }, {
                time: '5:15 p.m.',
                name: 'Dinner and Fellowship - FH (*Nursery 5:45–8:00 p.m.) '
            } ]
        }, {
            id: 3,
            day: 'Wednesday',
            events: [ {
                time: '6:30 a.m.',
                name: 'MOC Study - FH-E&F'
            }, {
                time: '5:15 p.m.',
                name: 'Dinner and Fellowship - FH (*Nursery 5:45–8:00 p.m.) '
            } ]
        }, {
            id: 4,
            day: 'Thursday',
            events: [ {
                time: '6:30 a.m.',
                name: 'MOC Study - FH-E&F'
            }, {
                time: '5:15 p.m.',
                name: 'Dinner and Fellowship - FH (*Nursery 5:45–8:00 p.m.) '
            } ]
        }, {
            id: 5,
            day: 'Friday',
            events: [ {
                time: '9:30 a.m.',
                name: 'Ladies Bible Study at the Barkers’ - 3181 Dolly Ridge Dr. '
            } ]
        }, {
            id: 6,
            day: 'Saturday',
            events: [ {
                time: '7:00 a.m.',
                name: 'Men’s Prayer Breakfasts - Barkers’, Thomases’'
            } ]
        }];


        function getCalendar() {
            return calendar;
        }

        function getCalendarItem( id ) {

            for( var i = 0; i < calendar.length; i++ ) {
                if( id == calendar[i].id )
                    return calendar[i];
            }

            return null;
        }

        return {
            getCalendar: getCalendar,
            getCalendarItem: getCalendarItem
        };
    });
