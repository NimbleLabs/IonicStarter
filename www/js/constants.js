angular.module('starter').constant( 'AppConstants', {
  BASE_URL: window.location.href.indexOf('localhost:8100') > 0 || window.location.href.indexOf('localhost:3000') > 0 ?
    'http://localhost:3000' : 'https://api.example.com',
  NOT_AUTHORIZED: 'not-authorized',
  AUTH_TOKEN: 'auth-token'
});


