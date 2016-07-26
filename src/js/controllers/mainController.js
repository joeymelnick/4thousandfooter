app.controller('mainController', ['$scope', '$http', function($scope, $http) {
var mountainArray = [];
    // Takes two seperate arrays of mountain names and heights
    // and turns it into an object.
   $http({
    url: 'https://api.myjson.com/bins/3c4yj',
    method: 'GET'
}).then(function successCallback(response) {
mountainArray = response.data;

  
//sets up mountains for ng-repeat

    console.log(mountainArray);
    $scope.sortType = 'identifier';
    $scope.reverse = false
    $scope.sortBy = function(sortType){
      $scope.reverse = ($scope.sortType === sortType) ? !$scope.reverse : false;
      console.log($scope.sortType)
      $scope.sortType = sortType
      console.log(sortType);
    }
    $scope.activeMountain = '';
        $scope.setMountain = function(x){
              $scope.activeMountain = x;
      
        };            
    $scope.mountains = mountainArray;

    $scope.thisMountain= function(obj){
                return $scope.activeMountain === obj;
        };
});
    }]);


