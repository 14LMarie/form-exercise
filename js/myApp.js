angular.module('myApp', [])
    .controller('myCtrl', function($scope) {
        $scope.countries = [
            {name: "Burundi" , code:"bi"},
            {name: "Belize", code:"bz"},
            {name: "Egypt", code:"eg"},
            {name: "Philippines", code:"ph"}
        ];
    });