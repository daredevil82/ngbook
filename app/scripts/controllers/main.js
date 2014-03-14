'use strict';

angular.module('angularApp')
    .controller('MainCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    })
    .controller('MainClock', function($scope){
        $scope.clock = {
            now : new Date()
        };

        var updateClock = function(){
            $scope.clock.now = new Date();
        }

        setInterval(function(){
            $scope.$apply(updateClock);
        }, 1000);

        updateClock();

    })
    .controller('MainCalc', function($scope){
        $scope.counter = 0;
        $scope.person = "Jason Johns";
        $scope.add = function(amt) {
            $scope.counter += amt;
        }        

        $scope.sub = function(amt){
            $scope.counter -= amt;
        }
    })
    .controller('MainParent', function($scope){
      $scope.person = {greeted : false, name : ""}
    })
    .controller("MainChild", function($scope){
        $scope.sayHello = function(){
            if ($scope.person.greeted) {
                $scope.person.name = "";
                $scope.person.greeted = false;
            }
            else {
                $scope.person.name = "Jason Johns";
                $scope.person.greeted = true;
            }
        }
    })
    .controller("MainParser", function($scope, $parse) {
        $scope.$watch( "expr", function (newVal, oldVal, scope) {
            if (newVal !== oldVal){
                var parseFun = $parse(newVal);
                console.log(newVal);
                $scope.parsedVal = parseFun(scope);
            }
        })
    })
    .filter("capitalize", function(){
        return function(input){
            if (input){
                return input[0].toUpperCase() + input.slice(1);
            }
        }
    });
