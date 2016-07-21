/*$(document).ready(function(){  

var jsonMimeType = "application/json;charset=UTF-8";
var mtData = {}; 
var trackID; 
var lastPlayedTrack;



$.ajax({
  // you can link to a JSON file here, or an api link
  url: "../mts.json",
  method: "GET",
  dataType: "json"
}).done(function(data) { //when done (with data as an argument) do this:
  myData = data // store the data in my existing songData variable
  
  // Create loop list
  for (var i in myData.mountain) {
    var mtName = myData.mountain[i].name;
    var mtHeight = myData.mountain[i].id;
  $('#list').append("<li class='track-item' id=" + trackNum + ">" + trackTitle + "</li>");
}

    // append to dom
    
  }  
});
});
*/

$(document).ready(function(){  
var mountains = [ 'Washington', 'Adams', 'Jefferson', 
                 'Monroe', 'Madison', 'Lafayette', 'Lincoln', 
                 'South Twin', 'Carter Dome', 'Moosilauke', 'Eisenhower', 
                 'North Twin', 'Carrigain', 'Bond', 'Middle Carter', 'West Bond', 
                 'Garfield', 'Liberty', 'South Carter', 'Wildcat', 'Hancoc', 
                 'South Kinsma', 'Fiel', 'Osceol', 'Flum', 'South Hancoc', 
                 'Pierc', 'North Kinsma', 'Wille', 'Bondclif', 'Zealan', 
                 'North Tripyrami', 'Cabo', 'East Osceol', 'Middle Tripyrami', 
                 'Canno', 'Hal', 'Jackso', 'To', 'Wildcat, D Pea', 'Moria', 
                 'Passaconawa', "Owl's Head" , 'Galehea', 'Whitefac', 'Waumbe', 
                 'Isolatio', 'Tecumse'];
var heights = [6288, 5774, 5712, 5384, 5367, 
                 5260, 5089, 4902, 4832, 4802, 4780, 4761, 
                 4700, 4698, 4610, 4540, 4500, 4459, 4430, 4422, 
                 4420, 4358, 4340, 4340, 4328, 4319, 4310, 4293, 4285, 4265, 4260,
                 4180, 4170, 4156, 4140, 4100, 4054, 4052, 4051, 4050, 4049, 4043,
                 4025, 4024, 4020, 4006, 4004, 4003];
var currentMt;
var currentHeight;
for(i=0; i < mountains.length; i++){

currentMt = mountains[i];
currentHeight = heights[i];
 $('#tracker').append("<div class='mtItem' id=" + currentMt + ">" + "<h6>" + currentMt + " - " +
  currentHeight + " Feet </h6> <form class='trackerForm hidden'>
            <section>
              <label>Hiked</label>
              <input type='checkbox'>
              <label class='trackerSpace'> Date</label> 
              <input type='date'>
              <label class='trackerSpace'> Hike Notes</label>
              <textarea rows='4'>Enter your notes here.</textarea>
              <button type='submit' value='Submit'>Submit</button>
            </section>
          </form>
          </div>");
};
});
