require("dotenv").config();

// ========================================================
// require variables
// ========================================================
// need this for OMDB
var request=  require("request");

var Spotify = require("node-spotify-api");
var Twitter = require("twitter");
var keys = require("./keys");
var fs = require("fs");

// ========================================================
// spotify / twitter keys
// ========================================================
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

// ========================================================
// misc variables
// ========================================================
var searchInput = "";
var dataInfo;
// ========================================================
// functions
// ========================================================

function getTweets() {
    console.log("what's up, Twitter");
    var params = {screen_name: 'combat_shock'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (error) {
            console.log(error);
        }

        
        for (var i = 0; i < 20; i++){
            console.log("========================================");
            console.log("");
            console.log(tweets[i].text);
            console.log(tweets[i].created_at);
            console.log("========================================");
        }
    
    });
}

function getSpotify(){
    console.log("Yo Spotify!!!");
    for (var i = 3; i < process.argv.length; i++) {
        searchInput += process.argv[i] + " ";
        
    }

    if (searchInput === "") {
        spotify.search({ type: 'track', query: "Ace of Base", limit: 1}, function(error, data){
            if (error) {
                return console.log("Error!! Error!!");
            }
            console.log("========================================");
            console.log("Artist: " + data.tracks.items[0].artists[0].name);
            console.log("Album Name: " + data.tracks.items[0].album.name);
            console.log("Song Name: " + data.tracks.items[0].name);
            console.log("Preview URL: " + data.tracks.items[0].preview_url);
            console.log("========================================");
        });
    } else {
        spotify.search({ type: 'track', query: searchInput, limit: 1}, function(error, data){
            if (error) {
                return console.log("Error!! Error!!");
            }
            console.log("========================================");
            console.log("Artist: " + data.tracks.items[0].artists[0].name);
            console.log("Album Name: " + data.tracks.items[0].album.name);
            console.log("Song Name: " + data.tracks.items[0].name);
            console.log("Preview URL: " + data.tracks.items[0].preview_url);
            console.log("========================================");
        });
    }
}

function omdb(){
    console.log("What up, OMDB?")
    for (var i = 3; i < process.argv.length; i++) {
        searchInput += process.argv[i] + " ";
        console.log(searchInput);
    }
    var movieInfo;
    var queryUrl = "http://www.omdbapi.com/?apikey="+keys.omdb+"&t="+searchInput;
    if (searchInput === "") {
        queryUrl = "http://www.omdbapi.com/?apikey="+keys.omdb+"&t=Mr+Nobody";
        request(queryUrl, function (error, response, body){
            movieInfo = JSON.parse(body);
            console.log("========================================");
            console.log("Title: " + movieInfo.Title);
            console.log("Year: " + movieInfo.Year);
            console.log("Rating: " + movieInfo.Rated);
            console.log("Rotten Tomatoes score: " + movieInfo.Ratings[1].Value);
            console.log("Country where the movie was produced: " + movieInfo.Country);
            console.log("Language: " + movieInfo.Language);
            console.log("Plot: " + movieInfo.Plot);
            console.log("Actors: " + movieInfo.Actors);
            console.log("========================================");
        });
    } else {
        request(queryUrl, function (error, response, body){
            movieInfo = JSON.parse(body);
            console.log("========================================");
            console.log("Title: " + movieInfo.Title);
            console.log("Year: " + movieInfo.Year);
            console.log("Rating: " + movieInfo.Rated);
            console.log("Rotten Tomatoes score: " + movieInfo.Ratings[1].Value);
            console.log("Country where the movie was produced: " + movieInfo.Country);
            console.log("Language: " + movieInfo.Language);
            console.log("Plot: " + movieInfo.Plot);
            console.log("Actors: " + movieInfo.Actors);
            console.log("========================================");
        });
    }
}

function doWhatItSays(){
    fs.readFile("random.txt", "utf8", function(error, data){
        if (error){
            return console.log("Error!! Error!!");
        }
        console.log(data);
        dataInfo = data.split(",");
        process.argv[2] =dataInfo[0];
        searchInput = dataInfo[1];
        getSpotify();
    });
}

if (process.argv[2] === "my-tweets"){
    getTweets();
} else if (process.argv[2] === "spotify-this-song"){
    getSpotify();
} else if (process.argv[2] === "movie-this"){
    omdb();
} else if (process.argv[2] === "do-what-it-says"){
    doWhatItSays();
} else {
    console.log("What in the world are you saying? I only understand: 'my-tweets', 'spotify-this-song', 'movie-this', 'do-what-it-says'");
}


