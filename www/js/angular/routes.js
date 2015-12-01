
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
      when('/registerPT2', {
        templateUrl: 'views/registerPT2.html'
      }).
      when('/registerPT3', {
        templateUrl: 'views/registerPT3.html'
      }).
      when('/registerPT4', {
        templateUrl: 'views/registerPT4.html'
      }).
       when('/sendPolicy', {
        templateUrl: 'views/sendPolicy.html'
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

       when('/winter', {
        templateUrl: 'views/winter.html'
      }).
       when('/spring', {
        templateUrl: 'views/spring.html'
      }).
       when('/summer', {
        templateUrl: 'views/summer.html'
      }).
       when('/autumn', {
        templateUrl: 'views/autumn.html'
      }).

      when('/share', {
        templateUrl: 'views/share.html'
      }).
      when('/products', {
        templateUrl: 'views/products.html'
      }).
      when('/productscar', {
        templateUrl: 'views/products_car.html'
      }).
       when('/productshome', {
        templateUrl: 'views/products_home.html'
      }).
       when('/productscamping', {
        templateUrl: 'views/products_camping.html'
      }).
       when('/productshortterm', {
        templateUrl: 'views/products_shortterm.html'
      }).
      when('/claim', {
        templateUrl: 'views/claim.html'
      }).
      when('/claim2', {
        templateUrl: 'views/claimPT2.html'
      }).
      when('/contact', {
        templateUrl: 'views/contact.html'
      }).
      when('/more', {
        templateUrl: 'views/more.html'
      }).
      when('/share', {
        templateUrl: 'views/share.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);