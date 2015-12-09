
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
        when('/productsmobility', {
        templateUrl: 'views/products_mobility.html'
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
      when('/reportclaim', {
        templateUrl: 'views/report_claim.html'
      }).
      when('/reportclaimPT2', {
        templateUrl: 'views/report_claimPT2.html'
      }).
       when('/reportclaimPT3', {
        templateUrl: 'views/report_claimPT3.html'
      }).
       when('/sendClaim', {
        templateUrl: 'views/sendClaim.html'
      }).


      when('/reporttheft', {
        templateUrl: 'views/report_theft.html'
      }).
      when('/reporttheftPT2', {
        templateUrl: 'views/report_theftPT2.html'
      }).
      when('/reporttheftPT3', {
        templateUrl: 'views/report_theftPT3.html'
      }).
       when('/sendtheftClaim', {
        templateUrl: 'views/sendtheftClaim.html'
      }).


      when('/contact', {
        templateUrl: 'views/contact.html'
      }).
      when('/more', {
        templateUrl: 'views/more.html'
      }).
      when('/morecontact', {
        templateUrl: 'views/more_contact.html'
      }).
      when('/moreccwww', {
        templateUrl: 'views/more_ccwww.html'
      }).
      when('/moresocial', {
        templateUrl: 'views/more_social.html'
      }).

      when('/moremost', {
        templateUrl: 'views/more_most.html'
      }).
      when('/morecccwww', {
        templateUrl: 'views/more_cccwww.html'
      }).
      when('/moreDVLA', {
        templateUrl: 'views/more_DVLA.html'
      }).
      when('/moreMID', {
        templateUrl: 'views/more_MID.html'
      }).
      when('/moreproddocs', {
        templateUrl: 'views/more_proddocs.html'
      }).
      when('/moreprivacy', {
        templateUrl: 'views/more_privacy.html'
      }).
      when('/moreterms', {
        templateUrl: 'views/more_terms.html'
      }).
      when('/share', {
        templateUrl: 'views/share.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);