var app = angular.module('userApp',[]);
app.controller('UserController',function($scope){

    $scope.users=[
        {name:'Rakshan', email: 'rakshanshetty2003@gmail.com'},
        {name: 'Anshu', email: 'anshushetty2003@gmail.com'}
    ];

    $scope.newUser ={};

    $scope.createUser = function(){
        $scope.users.push($scope.newUser);
        $scope.newUser={};
    };

    $scope.editUser = function(user){
        $scope.editedUser= user;
    };

    $scope.updateUser = function(){
        $scope.editedUser={};
    };

    $scope.deleteUser = function(user){
        $scope.users.splice($scope.users.indexOf(user),1);
    };
});