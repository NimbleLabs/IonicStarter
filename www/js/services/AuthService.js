angular.module('app.services')

    .factory('AuthService', function ($http, $state, $q, AppConstants, Log) {

        function init() {
            Log.info("AuthService.init")
            var token = getAuthToken()

            if (token) {
                $http.defaults.headers.common[AppConstants.AUTH_TOKEN] = token;
            } else {
                $http.defaults.headers.common[AppConstants.AUTH_TOKEN] = '';
            }
        }

        function setAuthToken(authToken) {
            window.localStorage[AppConstants.AUTH_TOKEN] = authToken;
        }

        function getAuthToken() {
            var token = window.localStorage[AppConstants.AUTH_TOKEN]

            if (token)
                return token;
            else
                return null;
        }

        function login(email, password) {
            Log.info("AuthService logging in");

            var deferred = $q.defer();

            var req = {
                method: 'POST',
                url: AppConstants.BASE_URL + '/api/v1/login.json',
                data: {
                    user: {
                        email: email,
                        password: password
                    }
                }
            };

            $http(req)
                .success(function (data) {
                    var user = data;

                    var email = user.email;
                    window.localStorage[ 'app-email' ] = email;
                    window.localStorage[ 'app-user-name' ] = user.full_name

                    var authToken = user.auth_token;
                    setAuthToken(authToken);
                    init();

                    deferred.resolve(data);
                })
                .error(function (error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        function logout() {
            delete window.localStorage[AppConstants.AUTH_TOKEN];
            delete $http.defaults.headers.common[AppConstants.AUTH_TOKEN];

            $state.go('login');
            var deferred = $q.defer();

            var req = {
                method: 'GET',
                url: AppConstants.BASE_URL + '/api/v1/logout.json'
            };

            $http(req)
                .success(function (data) {
                    Log.info("logout done")
                    Log.info(data)
                    deferred.resolve(data);
                })
                .error(function (error) {
                    Log.error("logout error")
                    Log.error(error)
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        function getEmail() {
            return window.localStorage[ 'app-email' ];
        }

        function getName() {
            return window.localStorage[ 'app-user-name' ];
        }

        init();

        return {
            getAuthToken: getAuthToken,
            login: login,
            logout: logout,
            getEmail: getEmail,
            getName: getName
        };
    });
