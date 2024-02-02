var app = angular.module('myApp', []);
app.controller('myController',function($scope){
    $scope.students=[
        {name:'Anshu', cgpa:8.8},
        {name:'Rakshan', cgpa:9.2},
        {name:'Johnson', cgpa:6.5},
        {name:'Safwan', cgpa:7.5},
        {name:'Zeenath', cgpa:8.2}

    ];
});