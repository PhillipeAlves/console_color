const { CC } = require("./src/consoleColor");

// SINGLE
console.log(CC("Green", "F-green"), "is great!");

// MULTIPLE
console.log(
  "I'm a",
  CC("yellow text with underscore.", "G-underscore", "F-yellow")
);

// THEME
const error = CC("error:", "B-red");
console.log(error, "Something went wrong...");
