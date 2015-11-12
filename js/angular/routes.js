
clubCare.config(['$routeProvider',
  function($routeProvider) {

 $routeProvider.
      when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainController'
      }).
      when('/intro', {
        templateUrl: 'views/intro.html'
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
      when('/repairer', {
        templateUrl: 'views/repairer.html'
      }).


      otherwise({
        redirectTo: '/'
      });
  }]);