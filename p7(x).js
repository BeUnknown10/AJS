var app = angular.module('myApp', []);

app.controller('UserController', function ($scope) {
    $scope.users = [
        { name: 'manish', email: 'manish@gmail.com' },
        { name: 'ashay', email: 'ashay21@gmail.com' }
    ];

    $scope.newUser = {};

    $scope.createUser = function () {
        $scope.users.push($scope.newUser);
        $scope.newUser = {};
    };

    $scope.editUser = function (user) {
        $scope.editedUser = user;
    };

    $scope.updateUser = function (user) {
        $scope.editedUser = {};
    };

    $scope.deleteUser = function (user) {
        $scope.users.splice($scope.users.indexOf(user), 1);
    };
});