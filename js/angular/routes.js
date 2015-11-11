blogSample.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainController'
      }).
      when('/about', {
        templateUrl: 'views/about.html'
      }).
      when('/register', {
        templateUrl: 'views/register.html'
      }).
      when('/policy', {
        templateUrl: 'views/policy.html'
      }).


      otherwise({
        redirectTo: '/'
      });
  }]);