var profile = require("./profile.js");
var users = process.argv.slice(2);
users.forEach(profile.juri); // chalkers1234, nickpettit
profile.juri2("custum message");
