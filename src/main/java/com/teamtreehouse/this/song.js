function Song(title, artist, duration) {
    //calls Media constructor function using the call method
  Media.call(this, title, duration);
  this.artist = artist;
}

//creates the prototype chance for the Song prototype to inherit from the
//Media prototype
Song.prototype = Object.create(Media.prototype);

Song.prototype.toHTML = function() {
  var htmlString = '<li';
  if(this.isPlaying) {
    htmlString += ' class="current"';
  }
  htmlString += '>';
  htmlString += this.title;
  htmlString += ' - '
  htmlString += this.artist;
  htmlString += '<span class="duration">'
  htmlString += this.duration;
  htmlString += '</span></li>';
  return htmlString;
};
