const figlet = require("figlet");  //jb hum kisse package ko require krna chate hai toh sidha package ka naam likhna hota hai

figlet("Amit Sahu ", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });