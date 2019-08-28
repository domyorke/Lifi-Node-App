# Liri-Node-App
Liri is a Language Interpretation and Recognition Interface that searches movie information, songs, and upcoming concerts. In order to achieve this, Liri interfaces with Spotify, BandsInTown, and OMDB. 

### Liri can be run...
1. With two arguments in the command line (command and yourSearch).
2. Off a random.txt file 

# General Search
```
node liri.js command yourSearch
```
To search Liri, the user will input the following argument (the "command") which is then followed by the user's search...

* `concert-this` - Used to search for upcoming concerts for a musical artist via BandsInTown
* `spotify-this-song` - Used to search a song via spotify
* `movie-this` - Used to search information about a movie via OMDB

### Example Search
```
node liri.js spotify-this-song "reckoner"
```
In the above line, "spotify-this-song" is the first "command" argument, and "reckoner" is the "yourSearch" argument.


### "do-what-it-says" search
In this case, the "do-what-it-says" search reads data from the "random.txt" file using the fs.readFile method. Then the Javascript method "split," is used to split the text into separate variables (output1 and output2). These output variables are then reassigned to the arguments "argv.2" and "argv.3." This process allows the user to search a text file via Liri instead of inputing their search in the console. 

Examples of these searches are shown below...

# Demos

##### spotify-this-song Demo...

![](https://github.com/domyorke/Lifi-Node-App/blob/master/Liri%20Demo%20gifs/spotify-this-song.gif?raw=true)

##### concert-this Demo...

![](https://github.com/domyorke/Lifi-Node-App/blob/master/Liri%20Demo%20gifs/concert-this.gif?raw=true)

##### movie-this Demo...

![](https://github.com/domyorke/Lifi-Node-App/blob/master/Liri%20Demo%20gifs/movie-this.gif?raw=true)

##### do-what-it-says Demo...

![](https://github.com/domyorke/Lifi-Node-App/blob/master/Liri%20Demo%20gifs/do-what-it-says.gif?raw=true)



See my deployed LIRI project [here](https://domyorke.github.io/Lifi-Node-App/).

Project created by Dominic Jenkins
