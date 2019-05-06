require("dotenv").config();
var keys = require("./keys");
var Spotify = require('node-spotify-api');

function spotifyThis (){
    var spotify = new Spotify({
        id: keys.spotify.id,
        secret: keys.spotify.secret
      });
       
      spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }

      //make it pretty
      console.log("\n----------------\n")
       
      //grab artist name
      console.log("Artist name: "+data.tracks.items[0].artists[0].name)

      //grab song name 
      console.log("Song name: "+data.tracks.items[0].name); 

      //make it pretty
      console.log("\n----------------\n")
      });
    
}

spotifyThis()