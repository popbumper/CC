
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
      when('/hints', {
        templateUrl: 'views/hints.html'
      }).
      when('/share', {
        templateUrl: 'views/share.html'
      }).
      when('/products', {
        templateUrl: 'views/products.html'
      }).
      when('/claim', {
        templateUrl: 'views/claim.html'
      }).
      when('/contact', {
        templateUrl: 'views/contact.html'
      }).
      when('/more', {
        templateUrl: 'views/more.html'
      }).
      when('/policysave', {
        templateUrl: 'policysave_pt1.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);