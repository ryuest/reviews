var playlist = new Playlist ();
var songOne = new Song ("Song One", "Artist One", "2:50");
var songTwo = new Song ("Song Two", "Artist Two", "3:50");
var songThree = new Song ("Song Three", "Artist Three", "4:50");

var manOfSteel = new Movie ("Movie Three", "2312", "22:50");


var playlistElement = document.getElementById("playlist");

playlist.add(songOne);
playlist.add(songTwo);
playlist.add(manOfSteel);

var playButton = document.getElementById("play");
var nextButton = document.getElementById("next");
var stopButton = document.getElementById("stop");

var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

var playButton = document.getElementById("play");
playButton.onclick = function() {
  playlist.play();
  playlist.renderInElement(playlistElement);
}

var nextButton = document.getElementById("next");
nextButton.onclick = function() {
  playlist.next();
  playlist.renderInElement(playlistElement);
}

var stopButton = document.getElementById("stop");
stopButton.onclick = function() {
  playlist.stop();
  playlist.renderInElement(playlistElement);
}
