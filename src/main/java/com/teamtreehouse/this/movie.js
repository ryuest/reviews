function Movie(title, year, duration) {
  //calls Media constructor function using the call method
  Media.call(this, title, duration);
  this.year = year;
}

//creates the prototype chance for the Movie prototype to inherit from the
//Media prototype
Movie.prototype = Object.create(Media.prototype);

Movie.prototype.toHTML = function() {
  var htmlString = '<li';
  if(this.isPlaying) {
    htmlString += ' class="current"';
  }
  htmlString += '>';
  htmlString += this.title;
  htmlString += ' ( ';
  htmlString += this.year;
  htmlString += ')  ';
  htmlString += '<span class="duration">'
  htmlString += this.duration;
  htmlString += '</span></li>';
  return htmlString;
};
