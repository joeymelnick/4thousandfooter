app.controller('mainController', ['$scope', function($scope) {

	  $scope.title = 'Books for Days';
	// Takes two seperate arrays of mountain names and heights
	// and turns it into an object.
var mountains = [ 'Washington', 'Adams', 'Jefferson', 
                 'Monroe', 'Madison', 'Lafayette', 'Lincoln', 
                 'South Twin', 'Carter Dome', 'Moosilauke', 'Eisenhower', 
                 'North Twin', 'Carrigain', 'Bond', 'Middle Carter', 'West Bond', 
                 'Garfield', 'Liberty', 'South Carter', 'Wildcat', 'Hancock', 
                 'South Kinsma', 'Fiel', 'Osceol', 'Flume', 'South Hancock', 
                 'Pierce', 'North Kinsman', 'Wille', 'Bondclif', 'Zealand', 
                 'North Tripyramid', 'Cabo', 'East Osceola', 'Middle Tripyramid', 
                 'Cannon', 'Hale', 'Jackson', 'To', 'Wildcat, D Peak', 'Moria', 
                 'Passaconawa', "Owl's Head" , 'Galehead', 'Whiteface', 'Waumbe', 
                 'Isolation', 'Tecumse'];
var heights = [6288, 5774, 5712, 5384, 5367, 
                 5260, 5089, 4902, 4832, 4802, 4780, 4761, 
                 4700, 4698, 4610, 4540, 4500, 4459, 4430, 4422, 
                 4420, 4358, 4340, 4340, 4328, 4319, 4310, 4293, 4285, 4265, 4260,
                 4180, 4170, 4156, 4140, 4100, 4054, 4052, 4051, 4050, 4049, 4043,
                 4025, 4024, 4020, 4006, 4004, 4003];
var currentMt;
var currentHeight;
var mountainArray= [];
for(i=0; i < mountains.length; i++){

currentMt = mountains[i];
currentHeight = heights[i];

var mountainObj = {mountain: mountains[i], height: heights[i]};
mountainArray.push(mountainObj);
}

//sets up mountains for ng-repeat
	$scope.sortType = 'mountain';
	$scope.activeMountain = '';
        $scope.setMountain = function(x){
              $scope.activeMountain = x;
      
        };            
	$scope.mountains = mountainArray;
    $scope.thisMountain= function(obj){
                return $scope.activeMountain === obj;
        };
	}]);


