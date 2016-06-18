angular.module('app.services')

    .factory('Log', function () {

        function info(message) {
            log('INFO:: ' + message)
        }

        function error(message) {
            log('ERROR:: ' + message)
        }

        function log(message) {

            if (console) {
                console.log(message);
            }
        }

        function isWebApp() {
            return window.location.href.indexOf('localhost:8100') > 0 ||
                window.location.href.indexOf('localhost:3000') > 0 ||
                window.location.href.indexOf('app.fitnesshq.com') > 0
        }

        return {
            info: info,
            error: error,
            log: log,
            isWebApp: isWebApp
        };
    });
