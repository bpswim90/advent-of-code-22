var fs = require("node:fs");
const readline = require("node:readline");
filename = process.argv[2];

var totalScore = 0;

async function processInput() {
  const fileStream = fs.createReadStream(filename);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    processLine(line);
  }
  console.log("Total score is: " + totalScore);
}

var scoreMap = {
  "A X": 1 + 3,
  "A Y": 2 + 6,
  "A Z": 3 + 0,
  "B X": 1 + 0,
  "B Y": 2 + 3,
  "B Z": 3 + 6,
  "C X": 1 + 6,
  "C Y": 2 + 0,
  "C Z": 3 + 3,
};

function processLine(line) {
  totalScore += scoreMap[line];
}

processInput();
