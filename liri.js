require("dotenv").config();
var axios = require("axios");

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
        console.log("Command Not Found. Please start your search with ...")
    }

}

function concertThis() {

}


function spotifyThis(yourSearch) {

    //Requiring/importing the spotify API
    var Spotify = require('node-spotify-api');


    //var spotify used to store ID/Secret. 
    var spotify = new Spotify({

    //I will attempt to dynamically add these keys once I get this working
      id: "c0671d6c126742ffbfd066e72d492c1c",
      secret: "5dbd3bba36144deeb12d8b2806090166"
    })
    

    //Spotify request
    spotify.search({type: 'track', query: yourSearch}, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log(data.tracks.items); 
    });

}


function movieThis(yourSearch) {
    axios.get(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API}&t=${yourSearch}`)

    //anything after a ? is a query parameter. "&"" specifies a new query parameter

    .then(function (response) {
      // handle success
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}

function doThis() {

}

start();

