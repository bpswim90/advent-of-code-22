var fs = require("node:fs");
const readline = require("node:readline");
filename = process.argv[2];

var currentCal = 0;
var maxCal = 0;

async function processInput() {
  const fileStream = fs.createReadStream(filename);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    processLine(line);
  }
  console.log("Max calories is: " + maxCal);
}

function processLine(line) {
  if (line === "") {
    if (currentCal > maxCal) {
      maxCal = currentCal;
    }
    currentCal = 0;
  } else {
    var thisCal = parseInt(line);
    currentCal += thisCal;
  }
}

processInput();
