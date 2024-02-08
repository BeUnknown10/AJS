angular.module('employeeApp', [])
      .controller('EmployeeController', function ($scope) {
        $scope.employees = [
          { name: 'John Doe', salary: 50000 },
          { name: 'Jane Smith', salary: 60000 },
          { name: 'Bob Johnson', salary: 70000 },
          { name: 'Alice Williams', salary: 55000 },
          { name: 'John smith', salary: 80000 }
        ];

        $scope.filteredEmployees = $scope.employees;

        $scope.searchEmployees = function () {
          $scope.filteredEmployees = $scope.employees.filter(function (employee) {
            return (
              (employee.name.toLowerCase().includes($scope.searchName.toLowerCase()) || !$scope.searchName) &&
              (employee.salary == $scope.searchSalary || !$scope.searchSalary)
            ); 
          });
        };
        

        $scope.searchEmployees1 = function () {
          $scope.filteredEmployees = $scope.employees.filter(function (employee) {
            return (
              
              (employee.salary == $scope.searchSalary || !$scope.searchSalary)
            ); 
          });
        };
      });



