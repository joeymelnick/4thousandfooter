app.controller('mainController', ['$scope', '$http', function($scope, $http) {
var mountainArray = [];
    // Takes two seperate arrays of mountain names and heights
    // and turns it into an object.
   $http({
    url: 'https://api.myjson.com/bins/16nah',
    method: 'GET'
}).then(function successCallback(response) {
mountainArray = response.data;


 

  
   /*$.ajax({
  // you can link to a JSON file here, or an api link
  url: "https://api.myjson.com/bins/3hcwx",
  method: "GET",
  dataType: "json"
}).done(function(data) { //when done (with data as an argument) do this:
 console.log(mountainArray);

 */
//sets up mountains for ng-repeat

    console.log(mountainArray);
    $scope.sortType = 'mountain';
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


