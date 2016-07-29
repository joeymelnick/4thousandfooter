app.controller('mainController', ['$scope', '$http', function($scope, $http) {
var mountainArray = [];

   $http({
    url: 'https://api.myjson.com/bins/3c4yj',
    method: 'GET'
}).then(function successCallback(response) {
mountainArray = response.data;

  

/*sort type coding*/
    $scope.sortType = 'identifier';
    $scope.reverse = false;
    
/*this function calls an if statement that either changes the reverse variable or 
sets it to false. it then sets sort type to the argument that is passed  */  
    $scope.sortBy = function(sortType){
      $scope.reverse = ($scope.sortType === sortType) ? !$scope.reverse : false;
      $scope.sortType = sortType;
    }
    
    /*sets the active mountain so you can compare it on the click directive*/
    $scope.activeMountain = '';
        $scope.setMountain = function(x){
              $scope.activeMountain = x;
        };            
    
    /*sets array for repeat */
    $scope.mountains = mountainArray;

/*    shows the info page for the cooresponding mountain*/
    $scope.thisMountain= function(obj){
                return $scope.activeMountain === obj;
        };
});
    }]);


