var app = angular.module('signmein', ['ngResource','ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'AddCheckCtrl'
        })
        .when('/about', {
            templateUrl: 'partials/about.html'
        })
        .when('/makers', {
            templateUrl: 'partials/makers.html'
        })
        .when('/login', {
            templateUrl: 'partials/login.html'
        })
        .when('/attendedevents', {
            templateUrl: 'partials/attendedevents.html',
            controller: 'CheckCtrl'
        })
        .when('/createdevents', {
            templateUrl: 'partials/createdevents.html',
            controller: 'EventCtrl'
            
        })
        .when('/create', {
            templateUrl: 'partials/create.html',
            controller: 'AddEventCtrl'
        })
        .when('/previous', {
            templateUrl: 'partials/previous.html'
        })
        .when('/successful', {
            templateUrl: 'partials/successful.html'
        })
        .when('/userpanel', {
            templateUrl: 'partials/userpanel.html'
        })
        .when('/information', {
            templateUrl: 'partials/information.html'
        })
        .when('/test', {
            templateUrl: 'partials/test.html'
        })
        .when('/display', {
            templateUrl: 'partials/display.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);


///////DATABASE:checkins
//View Attended Events
app.controller('CheckCtrl', ['$scope', '$resource', 
    function($scope, $resource){
        var Checkins = $resource('/api/checkins');
        Checkins.query(function(checkins){
            $scope.checkins = checkins;
        });
    }]);

//Checkins
app.controller('AddCheckCtrl', ['$scope', '$resource', '$location', 
    function($scope, $resource, $location){
        $scope.save = function(){
            var Checkins = $resource('/api/checkins');
            Checkins.save($scope.checkin, function(){
                $location.path('/');
            });
        };
    }]);


///////DATABASE:occasions
//View Created Events
app.controller('EventCtrl', ['$scope', '$resource', 
    function($scope, $resource){
        var Occasions = $resource('/api/occasions');
        Occasions.query(function(occasions){
            $scope.occasions = occasions;
        });
    }]);

//Create Events
app.controller('AddEventCtrl', ['$scope', '$resource', '$location', 
    function($scope, $resource, $location){
        $scope.save = function(){
            var Occasions = $resource('/api/occasions');
            Occasions.save($scope.occasion, function(){
                $location.path('/');
            });
        };
    }]);

////////
//////// Make other search
///////