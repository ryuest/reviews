var City = function(name, state) {
  this.name = name || 'Par'
  this.state = state || 'Ore'

  this.printMyCity = function() {
    console.log("My city " + this.name + " state "+ state);
  };
};

por = new City("zer", "tye");

por.printMyCity();
