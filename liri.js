require("dotenv").config();
var keys = require("./keys");
var axios = require("axios");
var fs = require("fs");
var Spotify = require('node-spotify-api');
var moment = require('moment');
moment().format();

//take in the first argument the user passes
var search = process.argv[2];

//take in everything after the first argument that the user passes
var term = process.argv.slice(3).join(" ");



//Search Spotify for a track, and return song, album, artist and preview
function spotifyThis (){
    var spotify = new Spotify({
        id: keys.spotify.id,
        secret: keys.spotify.secret
      });

      //If no song is provided then your program will default to "The Sign" by Ace of Base.
      if(!term){
        term = "The Sign Ace of Base"
      }
      
       
      spotify.search({ type: 'track', query: term }, function(err, data) {
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

//for testing purposes only, replaced this with term after adding inquirer
var movieName = "the matrix";

//Code for OMDB that searches for what the user typed in 
function movieThis(term){

      //* If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.
  if(!term){
    term = "Mr. Nobody"
  }
  
var queryURL = "http://www.omdbapi.com/?t=" + term + "&y=&plot=short&apikey=trilogy";

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

//was added for testing purposes
var artist = "ariana grande"

//Code for bands in town that searches for concerts based on what the user types
var getMyBands = function() {
  if(!term){
    term = "the 1975"
  }

  var queryURL = 'https://rest.bandsintown.com/artists/' + term + '/events?app_id=codingbootcamp';

 

  axios.get(queryURL).then(
    function(response) {
      console.log('\n-----------------')

      console.log("Artist: " + response.data[0].lineup[0])

      console.log("Venue: " + response.data[0].venue.name)

      console.log("City: " + response.data[0].venue.city + ", " + response.data[0].venue.region)

      console.log("Date: " + moment(response.data[0].datetime).format('MM DD YYYY'))

      

      

      }
  )

 }

 //do-what-it-says function 
  //Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
  fs.readFile('./random.txt', function read(err, data) {
    if (err) {
        throw err;
    }
    
    //console.log("Doing what it says!")

    // Invoke the next step here however you like
    //console.log(data);   // Put all of the code here (not the best solution)
    //processFile(data);          // Or put the next step in a function and invoke it
});

function processFile(data) {
    console.log(data);
}


//Switch statement to determine which function the user wants
switch (search){
  case 'do-what-it-says': 
    processFile(term)
    break;
  case 'spotify-this-song':
    spotifyThis(term)
    break;
  case 'movie-this':
    movieThis(term)
    break;
  case 'concert-this':
    getMyBands(term)
}



// movieThis()
// getMyBands()
