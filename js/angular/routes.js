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
      otherwise({
        redirectTo: '/'
      });
  }]);