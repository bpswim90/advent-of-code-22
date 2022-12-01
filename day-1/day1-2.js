var fs = require("node:fs");
const readline = require("node:readline");
filename = process.argv[2];

var currentCal = 0;

var firstCal = 0;
var secondCal = 0;
var thirdCal = 0;

async function processInput() {
  const fileStream = fs.createReadStream(filename);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    processLine(line);
  }
  var totalCal = firstCal + secondCal + thirdCal;
  console.log("Total calories from top three elves: " + totalCal);
}

function processLine(line) {
  if (line === "") {
    rankCal(currentCal);
    currentCal = 0;
  } else {
    var thisCal = parseInt(line);
    currentCal += thisCal;
  }
}

function rankCal(cal) {
  switch (true) {
    case cal >= firstCal:
      thirdCal = secondCal;
      secondCal = firstCal;
      firstCal = cal;
      break;
    case cal >= secondCal:
      thirdCal = secondCal;
      secondCal = cal;
      break;
    case cal >= thirdCal:
      thirdCal = cal;
      break;
  }
}

processInput();
