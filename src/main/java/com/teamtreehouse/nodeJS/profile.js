var http = require("https");


function printMessage(username, badCount, points) {
  var message = username + " has " + badCount + " total badge(s) and " + points + " points in JavaScript";
  console.log(message);
}

function juri(username){
  var request = http.get("https://teamtreehouse.com/" + username + ".json", function(response){
    console.log(response.statusCode);
    var body = "";
    response.on('data', function (chunk) {
      body += chunk;
    });
    response.on('end', function(){
      if (response.statusCode === 200) {
        try{
          var profile = JSON.parse(body);
          printMessage(username, profile.badges.length, profile.points.JavaScript)
        } catch(error) {
          printError(error);
        }
      } else {
        printError({message: "There is an error for " + username + ". (" + response.statusMessage +")"});
      }
    });
  });
  //Connection Error
  request.on("error", printError);
}

function printError(error) {
  console.error(error.message);
}

function juri2 (message) {
  console.log(message);
}

module.exports.juri = juri;
module.exports.juri2 = juri2;
