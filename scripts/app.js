'use strict';

var app = angular
  .module('CantinaApp', [
    'ngAnimate',
    'ngResource',    
    'ngRoute',    
    'firebase'
  ])
  .constant('FURL', 'https://cantina.firebaseio.com/')  
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'        
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthController'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthController'
      })
      .when('/sale', {
        templateUrl: 'views/sale/sale.html',
        controller: 'SaleController'
      })
      .when('/product', {
        templateUrl: 'views/product/product.html',
        controller: 'ProductController'
      })
      .when('/browseproduct', {
        templateUrl: 'views/product/browseProduct.html',
        controller: 'ProductController'
      })
      .when('/editproduct/:productId', {
        templateUrl: 'views/product/editProduct.html',
        controller: 'ProductController'
      })
      .when('/customer', {
        templateUrl: 'views/customer/customer.html',
        controller: 'ProductController'
      })
      .when('/browsecustomer', {
        templateUrl: 'views/customer/browseCustomer.html',
        controller: 'ProductController'
      })
      .when('/editcustomer/:customerId', {
        templateUrl: 'views/customer/editcustomer.html',
        controller: 'ProductController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
