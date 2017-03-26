var app = angular.module('myApp', []);

app.controller('loginctrl', function($scope, $http) {

    $scope.submit = function() {
        $http.get('./data.json').then(function(response) {
            var data = response.data.data;
            var flag = false;
            data.forEach(function(element, index) {
                // statements
                if (element.userName == $scope.name && element.password == $scope.pass) {
                    flag = true;
                }
            });
            if (flag == true) {
                window.location.href = "./Welcome.html"
            } else {
                window.location.href = "./error.html"
            }
        });
    };

});