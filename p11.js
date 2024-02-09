var app = angular.module('myApp', []);

app.controller('StudentController', function () {
  this.students = [
    
    { name: "John Doe", cgpa: 3.8 },
    { name: "Jane Doe", cgpa: 3.6 },
    { name: "Peter Parker", cgpa: 3.9 },
    { name: "Mary Jane Watson", cgpa: 3.7 }

    // Add more default students if needed
  ];
});

