require("dotenv").config();
var axios = require("axios");
var moment = require("moment");

/*
// OMDB API Key - 179b22c6
*/

function start() {
    var command = process.argv[2];
    var yourSearch = process.argv[3];

    switch (command) {
        case "concert-this":
            concertThis(yourSearch)
            break;
        case "spotify-this-song":
            spotifyThis(yourSearch);
            break;
        case "movie-this":
            movieThis(yourSearch);
            break;
        case "do-what-it-says":
            doThis(yourSearch);
            break;
        default:
        console.log("Command Not Found. Please start your search with \"node liri.js\" followed by: \"concert-this\", \"spotify-this-song\", \"movie-this\", or \"do-what-it-says\". You may then search for your Concert, Song, or Movie :)")
    }

}

function concertThis(yourSearch) {
axios.get(`https://rest.bandsintown.com/artists/${yourSearch}/events?app_id=codingbootcamp`)
.then(function (response){
    for (let i = 0; i < response.data.length; i++) {
        console.log("---------------------")
        console.log(response.data[i].venue.name);
        console.log(response.data[i].venue.city + ", " + response.data[i].venue.region + " " + response.data[i].venue.country);
        console.log(moment(response.data[i].datetime).format('MMMM Do YYYY'));
    }
})
}


function spotifyThis(yourSearch) {

    //Requiring/importing the spotify API
    var Spotify = require('node-spotify-api');


    //var spotify used to store ID/Secret. 
    var spotify = new Spotify({
      id: process.env.SPOTIFY_ID,
      secret: process.env.SPOTIFY_SECRET
    })
    

    //Spotify request
    spotify.search({type: 'track', query: yourSearch}, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log(data.tracks.items[0].album.artists[0].name); 
      console.log(data.tracks.items[0].name);
      console.log(data.tracks.items[0].preview_url);
      console.log(data.tracks.items[0].album.name);
    });


}


function movieThis(yourSearch) {
    axios.get(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API}&t=${yourSearch}`)
    .then(function (response) {
      console.log(response.data.Title);
      console.log(response.data.Year);
      console.log(response.data.imdbRating);
      console.log(response.data.Ratings[1]);
      console.log(response.data.Production);
      console.log(response.data.Language);
      console.log(response.data.Plot);
      console.log(response.data.Actors);
    })
    .catch(function (error) {
      // handle error
      console.log('Error occurred: ' + error);
    })
    .finally(function () {
      // always executed
    });
}

function doThis() {

}

start();