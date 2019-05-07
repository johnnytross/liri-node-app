require("dotenv").config();
var keys = require("./keys");
var Spotify = require('node-spotify-api');

// function spotifyThis (){
//     var spotify = new Spotify({
//         id: keys.spotify.id,
//         secret: keys.spotify.secret
//       });
       
//       spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//         if (err) {
//           return console.log('Error occurred: ' + err);
//         }

//       //make it pretty, separate it from this is loaded
//       console.log("\n----------------\n")
       
//       //grab artist name
//       console.log("Artist name: " + data.tracks.items[0].artists[0].name)

//       //grab song name 
//       console.log("Song name: " + data.tracks.items[0].name); 

//       //song preview
//       console.log("Song preview: " + data.tracks.items[0].external_urls.spotify)

//       //album song is from
//       console.log("Album name: " + data.tracks.items[0].album.name)

//       //make it pretty
//       console.log("\n----------------\n")
//       });
    
// }

class BandsInTownEvents {
  
}

var Events = new BandsInTownEvents({
  id: keys.bandsintown.id
});

//set options for instance
//app_id and artists are required
Events.setParams({
  "app_id":"myappname", //can be anything
  "artists":[ //accepts string for single artist or an array of artist names
    "Wilco",
    "Yeah Yeah Yeahs"
  ]
});

//get your events with success and error callbacks
Events.getEvents(function( events ){
  for(var i = 0; i < events.length; i++){
    console.log( events[i].venue.city + ", " + events[i].venue.region );
  }
},function( errors ){
  console.log(errors);
});

// spotifyThis()
