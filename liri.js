require("dotenv").config();
var keys = require("./keys");
var axios = require("axios");
var Spotify = require('node-spotify-api');

//Search Spotify for a track, and return song, album, artist and preview
function spotifyThis (){
    var spotify = new Spotify({
        id: keys.spotify.id,
        secret: keys.spotify.secret
      });
       
      spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }

      //make it pretty, separate it from this is loaded
      console.log("\n----------------\n")
       
      //grab artist name
      console.log("Artist name: " + data.tracks.items[0].artists[0].name)

      //grab song name 
      console.log("Song name: " + data.tracks.items[0].name); 

      //song preview
      console.log("Song preview: " + data.tracks.items[0].external_urls.spotify)

      //album song is from
      console.log("Album name: " + data.tracks.items[0].album.name)

      //make it pretty
      console.log("\n----------------\n")
      });
    
}

var movieName = "the matrix";

function movieThis(){
var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    axios.get(queryURL).then(
        function(movieResponse){
            console.log("Title: " + movieResponse.data.Title);
            console.log("Year: " + movieResponse.data.Year);
            console.log("Rated: " + movieResponse.data.imdbRating);
            console.log("Country: " + movieResponse.data.Country);
            console.log("Language: " + movieResponse.data.Language);
            console.log("Plot: " + movieResponse.data.Plot);
            console.log("Actors: " + movieResponse.data.Actors);
        }
    );
};


// class BandsInTownEvents {
//   constructor (){
    
//     }
// }

// var Events = new BandsInTownEvents({
//   id: keys.bandsintown.id
// });

//set options for instance
//app_id and artists are required
// Events.setParams({
//   "app_id":"myappname", //can be anything
//   "artists":[ //accepts string for single artist or an array of artist names
//     "Wilco",
//     "Yeah Yeah Yeahs"
//   ]
// });

// //get your events with success and error callbacks
// Events.getEvents(function( events ){
//   for(var i = 0; i < events.length; i++){
//     console.log( events[i].venue.city + ", " + events[i].venue.region );
//   }
// },function( errors ){
//   console.log(errors);
// });

// bandsintown = function(){
//   Events.getArtistEventList('Skrillex')
//   Events.then(function(events) {
//     // return array of events
//   });
// }

var artist = "ariana grande"

var getMyBands = function() {
  var queryURL = 'https://rest.bandsintown.com/artists/' + artist + '/events?app_id=codingbootcamp';

  axios.get(queryURL).then(
    function(response) {
      console.log('\n-----------------')

      console.log(response.data[0].venue.name)

      console.log(response.data[0].venue.city + ", " + response.data[0].venue.region)

        
      }
  )

 }


spotifyThis()
movieThis()
getMyBands()
