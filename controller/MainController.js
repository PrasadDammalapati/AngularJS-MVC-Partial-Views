myApp.controller("MyCtrl", function ($scope, $location) {
    $scope.OpenView1 = function () {
        $location.path("/view1");
    }
    $scope.OpenView2 = function () {
        $location.path("/view2");
    }
});