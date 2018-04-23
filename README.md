# Liri

# Overview
In this assignment, you will make LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

# How it works
1. node liri.js my-tweets

This will show your last 20 tweets and when they were created at in your terminal/bash window.

===============================================================================

2. node liri.js spotify-this-song "song name here"

This will show the following information about the song in your terminal/bash window

Artist(s)

The song's name

A preview link of the song from Spotify

The album that the song is from

If no song is provided then your program will default to "The Sign" by Ace of Base.

===============================================================================

3. node liri.js movie-this "movie name here"

This will output the following information to your terminal/bash window:

  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Rotten Tomatoes Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.
If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

===============================================================================

4. node liri.js do-what-it-says

Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands. It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.


# screenshots

### Twitter
<img width="988" alt="screen shot 2018-04-23 at 6 04 13 pm" src="https://user-images.githubusercontent.com/32961912/39155746-5e55c372-4721-11e8-919b-da830e842bff.png">

### Spotify
<img width="560" alt="screen shot 2018-04-23 at 6 22 49 pm" src="https://user-images.githubusercontent.com/32961912/39156263-631c4992-4723-11e8-9122-b0765c3619b5.png">

NOTE: Some songs don't have preview URL's

### OMDB
<img width="982" alt="screen shot 2018-04-23 at 6 13 32 pm" src="https://user-images.githubusercontent.com/32961912/39156379-db53e1d6-4723-11e8-8a02-92aba1bb31c0.png">

### Do what it says 
<img width="934" alt="screen shot 2018-04-23 at 6 14 10 pm" src="https://user-images.githubusercontent.com/32961912/39156436-1a150cd8-4724-11e8-81ca-48d0d5081c20.png">

NOTE: As you can tell, this is one of the cases where the song does have a preview URL
