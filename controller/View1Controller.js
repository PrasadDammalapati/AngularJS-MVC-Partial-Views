myApp.controller('View1Controller', function ($scope, $http, $modal) {
    $http.get("data/myjsondata.json").success(function (response) {
        $scope.athletes = response;
    });

    $scope.ShowDetails = function (athletes) {
        var selectdata = "Name:" + athletes.athlete + ", Year:" + athletes.year + ", Sport:" + athletes.sport + ", Age:" + athletes.age;
        $scope.selecteddata = selectdata;
        $scope.model = {};
        var modalInstance = $modal.open({
            templateUrl: 'myModalContent.html',
            controller: ModalInstanceCtrl,
            scope: $scope,
            resolve: {
            }
        });
        //modalInstance.result.then(function () {
        //}, function () {
        //    $log.info('Modal dismissed at: ' + new Date());
        //});
    };

    $scope.sort = function (keyname) {
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }
});

var ModalInstanceCtrl = function ($scope, $modalInstance) {
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};